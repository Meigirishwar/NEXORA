import User from '../models/User.js';
const presence=new Map();
export function configureSockets(io){io.on('connection',socket=>{
 socket.on('join:user',id=>id&&socket.join(`user:${id}`));
 socket.on('join:workspace',id=>id&&socket.join(`workspace:${id}`));
 socket.on('presence:join',({userId,workspaceId})=>{if(!userId||!workspaceId)return;socket.join(`workspace:${workspaceId}`);socket.data.userId=String(userId);socket.data.workspaceId=String(workspaceId);const key=String(workspaceId);const set=presence.get(key)||new Set();set.add(String(userId));presence.set(key,set);socket.emit('presence:snapshot',[...set]);io.to(`workspace:${workspaceId}`).emit('presence:update',{userId:String(userId),workspaceId:String(workspaceId),online:true});});
 socket.on('disconnect',async()=>{const {userId,workspaceId}=socket.data||{};if(!userId||!workspaceId)return;const key=String(workspaceId);const set=presence.get(key);if(set){set.delete(String(userId));if(!set.size)presence.delete(key);}try{await User.findByIdAndUpdate(userId,{lastSeen:new Date()})}catch{}io.to(`workspace:${workspaceId}`).emit('presence:update',{userId:String(userId),workspaceId:String(workspaceId),online:false});});
 socket.on('join:project',id=>id&&socket.join(`project:${id}`));socket.on('leave:project',id=>id&&socket.leave(`project:${id}`));
});}
