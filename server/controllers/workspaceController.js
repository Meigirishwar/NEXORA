import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Workspace from '../models/Workspace.js';
import WorkspaceMember from '../models/WorkspaceMember.js';
import Project from '../models/Project.js';
import ProjectMember from '../models/ProjectMember.js';
import Task from '../models/Task.js';
import Sprint from '../models/Sprint.js';
import Issue from '../models/Issue.js';
import Comment from '../models/Comment.js';
import Notification from '../models/Notification.js';
import ActivityLog from '../models/ActivityLog.js';
import Milestone from '../models/Milestone.js';
import Label from '../models/Label.js';
import Attachment from '../models/Attachment.js';
import Announcement from '../models/Announcement.js';
import ChatMessage from '../models/ChatMessage.js';
import CalendarEvent from '../models/CalendarEvent.js';
import jwt from 'jsonwebtoken';
import { logActivity } from '../services/activityService.js';

const slugify = (s) => `${s}`.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 50) || 'workspace';
const uniqueSlug = async (name) => {
  const base = slugify(name);
  let slug = base;
  let n = 2;
  while (await Workspace.exists({ slug })) slug = `${base}-${n++}`;
  return slug;
};
const safeUser = (u) => u ? { _id: u._id, name: u.name, email: u.email, role: u.role, customRole: u.customRole, avatar: u.avatar, department: u.department, jobTitle: u.jobTitle, bio: u.bio, skills: u.skills, active: u.active, lastSeen: u.lastSeen, createdAt: u.createdAt } : null;
const token = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export async function listWorkspaces(req, res, next) {
  try {
    const memberships = await WorkspaceMember.find({ user: req.user._id, status: 'ACTIVE' })
      .populate('workspace', 'name slug description owner active createdAt')
      .sort('-createdAt');
    res.json(memberships.map(m => ({ ...m.workspace.toObject(), role: m.role, joinedAt: m.joinedAt })));
  } catch (e) { next(e); }
}

export async function createWorkspace(req, res, next) {
  try {
    const { name, description = '' } = req.body;
    if (!name?.trim()) return res.status(400).json({ message: 'Workspace name is required' });
    const workspace = await Workspace.create({ name: name.trim(), description, slug: await uniqueSlug(name), owner: req.user._id });
    await WorkspaceMember.create({ workspace: workspace._id, user: req.user._id, role: 'ADMIN' });
    await logActivity({ actor: req.user._id, workspace: workspace._id, action: 'created workspace', objectType: 'Workspace', objectId: workspace._id });
    res.status(201).json({ ...workspace.toObject(), role: 'ADMIN' });
  } catch (e) { next(e); }
}

export async function setupWorkspace(req, res, next) {
  const session = await mongoose.startSession();
  try {
    const { workspaceName, description = '', name, email, password, department = '', skills = '' } = req.body;
    if (!workspaceName?.trim() || !name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: 'Workspace name, admin name, email and password are required' });
    if (password.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters' });
    const normalizedEmail = email.trim().toLowerCase();
    if (await User.exists({ email: normalizedEmail })) return res.status(409).json({ message: 'An account with this email already exists. Use Login to existing workspace instead.' });
    let user, workspace;
    await session.withTransaction(async () => {
      user = await User.create([{ name: name.trim(), email: normalizedEmail, password: await bcrypt.hash(password, 12), role: 'ADMIN', department, skills: `${skills}`.split(',').map(x => x.trim()).filter(Boolean) }], { session }).then(a => a[0]);
      workspace = await Workspace.create([{ name: workspaceName.trim(), description, slug: await uniqueSlug(workspaceName), owner: user._id }], { session }).then(a => a[0]);
      await WorkspaceMember.create([{ workspace: workspace._id, user: user._id, role: 'ADMIN' }], { session });
    });
    res.status(201).json({ token: token(user), user: safeUser(user), workspace: { ...workspace.toObject(), role: 'ADMIN' } });
  } catch (e) { next(e); } finally { await session.endSession(); }
}

export async function getWorkspace(req, res, next) {
  try {
    const members = await WorkspaceMember.find({ workspace: req.workspace._id }).populate('user', 'name email role avatar bio department jobTitle customRole skills active lastSeen createdAt').sort('role name');
    res.json({ ...req.workspace.toObject(), role: req.workspaceMember.role, members: members.map(m => ({ ...safeUser(m.user), role: m.role, status: m.status, joinedAt: m.joinedAt })) });
  } catch (e) { next(e); }
}

export async function updateWorkspace(req, res, next) {
  try {
    const { name, description } = req.body;
    const data = {};
    if (name?.trim()) data.name = name.trim();
    if (description !== undefined) data.description = description;
    const workspace = await Workspace.findByIdAndUpdate(req.workspace._id, data, { new: true, runValidators: true });
    res.json({ ...workspace.toObject(), role: req.workspaceMember.role });
  } catch (e) { next(e); }
}

export async function deleteWorkspace(req, res, next) {
  try {
    const id = req.workspace._id;
    const ids = await Project.find({ workspace: id }).distinct('_id');
    await Promise.all([
      ProjectMember.deleteMany({ project: { $in: ids } }),
      Task.deleteMany({ project: { $in: ids } }),
      Sprint.deleteMany({ project: { $in: ids } }),
      Issue.deleteMany({ project: { $in: ids } }),
      Comment.deleteMany({ project: { $in: ids } }),
      Milestone.deleteMany({ project: { $in: ids } }),
      Label.deleteMany({ project: { $in: ids } }),
      ActivityLog.deleteMany({ project: { $in: ids } }),
      Attachment.deleteMany({ project: { $in: ids } }),
      ChatMessage.deleteMany({ workspace: id }),
      CalendarEvent.deleteMany({ workspace: id }),
      Notification.deleteMany({ workspace: id })
    ]);
    await Project.deleteMany({ workspace: id });
    await Announcement.deleteMany({ project: { $in: ids } });
    await WorkspaceMember.deleteMany({ workspace: id });
    await Workspace.deleteOne({ _id: id });
    res.json({ message: 'Workspace deleted' });
  } catch (e) { next(e); }
}

export async function addMember(req, res, next) {
  try {
    const { name, email, password, role = 'DEVELOPER', customRole = '', department = '', skills = '', jobTitle = '', bio = '' } = req.body;
    if (!name?.trim() || !email?.trim()) return res.status(400).json({ message: 'Name and email are required' });
    if(!['PROJECT_MANAGER','DEVELOPER','TESTER','GUEST','OTHER'].includes(role)) return res.status(400).json({ message: 'Choose a valid member role' });
    if(role==='PROJECT_MANAGER' && await WorkspaceMember.exists({workspace:req.workspace._id,role:'PROJECT_MANAGER',status:'ACTIVE'})) return res.status(409).json({message:'This workspace already has a Project Manager.'});
    const normalizedEmail = email.trim().toLowerCase();
    let user = await User.findOne({ email: normalizedEmail });
    let created = false;
    if (!user) {
      if (!password || password.length < 8) return res.status(400).json({ message: 'A password of at least 8 characters is required for a new member' });
      user = await User.create({ name: name.trim(), email: normalizedEmail, password: await bcrypt.hash(password, 12), role, customRole: role==='OTHER' ? customRole.trim() : '', department, jobTitle, bio, skills: `${skills}`.split(',').map(x => x.trim()).filter(Boolean) });
      created = true;
    } else {
      const existing = await WorkspaceMember.findOne({ workspace: req.workspace._id, user: user._id });
      if (existing) return res.status(409).json({ message: 'This person is already a member of the workspace' });
      if (name?.trim() && !user.name) user.name = name.trim();
      await user.save();
    }
    const member = await WorkspaceMember.create({ workspace: req.workspace._id, user: user._id, role });
    await logActivity({ actor: req.user._id, workspace: req.workspace._id, action: 'added workspace member', objectType: 'WorkspaceMember', objectId: member._id });
    const allMembers=await WorkspaceMember.find({workspace:req.workspace._id,status:'ACTIVE'}).distinct('user');
    const {notify}=await import('../services/notificationService.js');
    await notify(req.app.get('io'),allMembers.filter(x=>String(x)!==String(req.user._id)),'member_added',`${name.trim()} joined ${req.workspace.name}`,'/team',req.workspace._id);
    res.status(201).json({ ...safeUser(user), role: member.role, status: member.status, created });
  } catch (e) { next(e); }
}

export async function updateMember(req, res, next) {
  try {
    const member = await WorkspaceMember.findOne({ workspace: req.workspace._id, user: req.params.userId });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    const role = req.body.role;
    if (!['ADMIN','PROJECT_MANAGER','DEVELOPER','TESTER','GUEST','OTHER'].includes(role)) return res.status(400).json({ message: 'Invalid role' });
    if (String(member.user) === String(req.user._id) && role !== 'ADMIN') return res.status(400).json({ message: 'The workspace admin cannot remove their own admin role' });
    if (role === 'OTHER' && !req.body.customRole?.trim()) return res.status(400).json({message:'Enter the custom role name.'});
    if (role === 'PROJECT_MANAGER' && member.role !== 'PROJECT_MANAGER' && await WorkspaceMember.exists({workspace:req.workspace._id,role:'PROJECT_MANAGER',status:'ACTIVE'})) return res.status(409).json({message:'This workspace already has a Project Manager.'});
    if (role === 'ADMIN') {
      await WorkspaceMember.updateMany({ workspace: req.workspace._id, role: 'ADMIN', user: { $ne: member.user } }, { $set: { role: 'DEVELOPER' } });
      await Workspace.findByIdAndUpdate(req.workspace._id, { owner: member.user });
    }
    member.role = role; const targetUser=await User.findById(member.user); if(targetUser){ if(req.body.customRole!==undefined) targetUser.customRole=role==='OTHER'?req.body.customRole.trim():''; await targetUser.save(); } await member.save();
    res.json({ message: 'Member role updated', role });
  } catch (e) { next(e); }
}

export async function removeMember(req, res, next) {
  try {
    if (String(req.params.userId) === String(req.user._id)) return res.status(400).json({ message: 'The admin cannot remove themselves. Use Leave workspace only from a non-admin account.' });
    const member = await WorkspaceMember.findOneAndDelete({ workspace: req.workspace._id, user: req.params.userId });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    await Project.updateMany({ workspace: req.workspace._id }, { $pull: { members: member.user } });
    await ProjectMember.deleteMany({ user: member.user, project: { $in: await Project.find({ workspace: req.workspace._id }).distinct('_id') } });
    res.json({ message: 'Member removed from workspace' });
  } catch (e) { next(e); }
}

export async function leaveWorkspace(req, res, next) {
  try {
    if (req.workspaceMember.role === 'ADMIN') return res.status(400).json({ message: 'The workspace admin cannot leave. Transfer admin ownership first or delete the workspace.' });
    await WorkspaceMember.deleteOne({ workspace: req.workspace._id, user: req.user._id });
    await Project.updateMany({ workspace: req.workspace._id }, { $pull: { members: req.user._id } });
    res.json({ message: 'You left the workspace' });
  } catch (e) { next(e); }
}
