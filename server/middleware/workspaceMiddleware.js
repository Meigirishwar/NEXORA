import Workspace from '../models/Workspace.js';
import WorkspaceMember from '../models/WorkspaceMember.js';

export async function requireWorkspace(req, res, next) {
  try {
    const id = req.headers['x-workspace-id'];
    if (!id) return res.status(400).json({ message: 'Select a workspace first' });
    const workspace = await Workspace.findOne({ _id: id, active: true });
    if (req.params.id && String(req.params.id) !== String(id)) return res.status(403).json({ message: 'Workspace context mismatch' });
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    const membership = await WorkspaceMember.findOne({ workspace: workspace._id, user: req.user._id, status: 'ACTIVE' });
    if (!membership) return res.status(403).json({ message: 'You are not a member of this workspace' });
    req.workspace = workspace;
    req.workspaceMember = membership;
    next();
  } catch (e) {
    next(e);
  }
}

export const workspaceRoles = (...allowed) => (req, res, next) => {
  const role = req.workspaceMember?.role || req.user?.role;
  return allowed.includes(role) ? next() : res.status(403).json({ message: 'Workspace permission denied' });
};
