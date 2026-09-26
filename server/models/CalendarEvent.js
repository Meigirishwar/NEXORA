import mongoose from 'mongoose';
const schema=new mongoose.Schema({workspace:{type:mongoose.Schema.Types.ObjectId,ref:'Workspace',required:true,index:true},title:{type:String,required:true},description:String,startAt:{type:Date,required:true},endAt:Date,createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},assignedTo:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],allDay:{type:Boolean,default:false},completed:{type:Boolean,default:false},color:String},{timestamps:true});
export default mongoose.model('CalendarEvent',schema);
