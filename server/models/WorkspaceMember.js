import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['ADMIN', 'PROJECT_MANAGER', 'DEVELOPER', 'TESTER', 'GUEST', 'OTHER'], default: 'DEVELOPER' },
  status: { type: String, enum: ['ACTIVE', 'SUSPENDED'], default: 'ACTIVE' },
  joinedAt: { type: Date, default: Date.now }
}, { timestamps: true });

schema.index({ workspace: 1, user: 1 }, { unique: true });
export default mongoose.model('WorkspaceMember', schema);
