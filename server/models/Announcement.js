import mongoose from 'mongoose';
const schema=new mongoose.Schema({project:{type:mongoose.Schema.Types.ObjectId,ref:'Project'},author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},title:String,message:String},{timestamps:true}); export default mongoose.model('Announcement',schema);
