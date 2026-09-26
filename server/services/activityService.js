import ActivityLog from '../models/ActivityLog.js';
export async function logActivity({actor,workspace,project,action,objectType,objectId,metadata}){return ActivityLog.create({actor,workspace,project,action,objectType,objectId,metadata});}
