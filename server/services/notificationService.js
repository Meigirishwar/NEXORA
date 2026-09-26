import Notification from '../models/Notification.js';
export async function notify(io,userIds,type,message,link='',workspace=null){const ids=[...new Set(userIds.filter(Boolean).map(String))];const docs=await Notification.insertMany(ids.map(user=>({workspace,user,type,message,link})));if(io)ids.forEach(id=>io.to(`user:${id}`).emit('notification:new',{workspace}));return docs;}
