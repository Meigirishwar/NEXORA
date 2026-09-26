import mongoose from 'mongoose';
const schema=new mongoose.Schema({workspace:{type:mongoose.Schema.Types.ObjectId,ref:'Workspace',index:true},user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},type:String,message:String,link:String,read:{type:Boolean,default:false},reminderKey:{type:String,index:true}},{timestamps:true});
export default mongoose.model('Notification',schema);
