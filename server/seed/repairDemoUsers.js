import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import {connectDB} from '../config/db.js';
import User from '../models/User.js';
import Workspace from '../models/Workspace.js';
import WorkspaceMember from '../models/WorkspaceMember.js';

const accounts=[
 {name:'Meigirishwar V R',email:'admin@nexora.com',password:'Admin@123',role:'ADMIN',department:'IT',jobTitle:'Workspace Administrator'},
 {name:'Lokesh V',email:'lokesh@nexora.com',password:'Lokesh@123',role:'PROJECT_MANAGER',department:'Engineering',jobTitle:'Project Manager'},
 {name:'Midhun J S',email:'midhun@nexora.com',password:'Midhun@123',role:'DEVELOPER',department:'Engineering',jobTitle:'Software Developer'},
 {name:'Nithesh Kumar M',email:'nithesh@nexora.com',password:'Nithesh@123',role:'DEVELOPER',department:'Engineering',jobTitle:'Software Developer'},
 {name:'Mariyappa Raja',email:'mariyappa@nexora.com',password:'Mariyappa@123',role:'TESTER',department:'Quality Assurance',jobTitle:'QA Tester'},
 {name:'Meghaa',email:'meghaa@nexora.com',password:'Meghaa@123',role:'GUEST',department:'Business',jobTitle:'Guest / Stakeholder'}
];
await connectDB();
const ws=await Workspace.findOne({slug:'nexora-demo-workspace'}) || await Workspace.findOne({name:'NEXORA Demo Workspace'});
if(!ws) throw new Error('Demo workspace not found. Run npm run seed first.');
const users=[];
for(const a of accounts){
  let u=await User.findOne({name:a.name});
  if(!u) u=await User.findOne({email:a.email});
  if(!u) u=await User.create({...a,password:await bcrypt.hash(a.password,12)});
  else {
    const emailOwner=await User.findOne({email:a.email,_id:{$ne:u._id}});
    if(emailOwner) { emailOwner.email=`legacy-${String(emailOwner._id)}@nexora.local`; await emailOwner.save(); }
    u.email=a.email;u.name=a.name;u.role=a.role;u.department=a.department;u.jobTitle=a.jobTitle;u.password=await bcrypt.hash(a.password,12);u.active=true;await u.save();}
  users.push(u);
}
const admin=users[0];
ws.owner=admin._id;ws.active=true;await ws.save();
for(const u of users) await WorkspaceMember.findOneAndUpdate({workspace:ws._id,user:u._id},{workspace:ws._id,user:u._id,role:u.role,status:'ACTIVE'},{upsert:true,new:true});
console.log('Demo credentials repaired without deleting projects/tasks/chat.');
for(const a of accounts) console.log(`${a.role}: ${a.email} / ${a.password}`);
await mongoose.disconnect();
