import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},goal:String,project:{type:mongoose.Schema.Types.ObjectId,ref:'Project',required:true},startDate:Date,endDate:Date,status:{type:String,enum:['Planned','Active','Completed'],default:'Planned'}},{timestamps:true}); export default mongoose.model('Sprint',schema);
