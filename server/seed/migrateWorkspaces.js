import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import ProjectMember from '../models/ProjectMember.js';
import Workspace from '../models/Workspace.js';
import WorkspaceMember from '../models/WorkspaceMember.js';
import Notification from '../models/Notification.js';

await connectDB();
const admin = await User.findOne({ email: 'admin@nexora.com' }) || await User.findOne().sort('createdAt');
if (!admin) throw new Error('No users found. Run npm run seed first.');

let workspace = await Workspace.findOne({ slug: 'nexora-demo-workspace' });
if (!workspace) workspace = await Workspace.create({ name: 'NEXORA Demo Workspace', slug: 'nexora-demo-workspace', description: 'Default workspace for the NEXORA demonstration environment.', owner: admin._id });

const users = await User.find({});
for (const user of users) {
  const role = user._id.equals(admin._id) ? 'ADMIN' : user.role === 'ADMIN' ? 'PROJECT_MANAGER' : user.role;
  await WorkspaceMember.findOneAndUpdate({ workspace: workspace._id, user: user._id }, { workspace: workspace._id, user: user._id, role }, { upsert: true, new: true });
}
await WorkspaceMember.findOneAndUpdate({ workspace: workspace._id, user: admin._id }, { role: 'ADMIN' }, { upsert: true });
await Workspace.findByIdAndUpdate(workspace._id, { owner: admin._id });

const projects = await Project.find({ workspace: { $exists: false } });
for (const project of projects) {
  project.workspace = workspace._id;
  await project.save();
  for (const userId of project.members || []) {
    const user = users.find(u => u._id.equals(userId));
    if (!user) continue;
    const role = user._id.equals(admin._id) ? 'PROJECT_MANAGER' : user.role;
    await ProjectMember.findOneAndUpdate({ project: project._id, user: userId }, { project: project._id, user: userId, role }, { upsert: true });
  }
}

await Notification.updateMany({ workspace: { $exists: false } }, { $set: { workspace: workspace._id } });
console.log(`Workspace migration complete: ${workspace.name}`);
console.log(`Members: ${await WorkspaceMember.countDocuments({ workspace: workspace._id })}`);
console.log(`Projects: ${await Project.countDocuments({ workspace: workspace._id })}`);
await mongoose.disconnect();
