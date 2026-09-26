import mongoose from 'mongoose';
const schema=new mongoose.Schema({workspace:{type:mongoose.Schema.Types.ObjectId,ref:'Workspace',index:true},name:{type:String,required:true},key:{type:String,required:true,uppercase:true,trim:true},description:String,manager:{type:mongoose.Schema.Types.ObjectId,ref:'User'},members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],startDate:Date,endDate:Date,status:{type:String,enum:['Planning','Active','On Hold','Completed','Archived'],default:'Planning'},priority:{type:String,enum:['Critical','High','Medium','Low'],default:'Medium'},technology:[String],category:String,archived:{type:Boolean,default:false}},{timestamps:true});
schema.index({workspace:1,key:1},{unique:true,sparse:true});
export default mongoose.model('Project',schema);
