import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true},role:{type:String,enum:['ADMIN','PROJECT_MANAGER','DEVELOPER','TESTER','GUEST','OTHER'],default:'DEVELOPER'},avatar:String,bio:String,department:String,jobTitle:String,customRole:String,skills:[String],active:{type:Boolean,default:true},lastSeen:Date,resetToken:String,resetTokenExpires:Date},{timestamps:true});
export default mongoose.model('User',schema);
