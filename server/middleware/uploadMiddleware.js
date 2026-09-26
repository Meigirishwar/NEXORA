import multer from 'multer';
import path from 'path';
import fs from 'fs';
const dir=process.env.UPLOAD_DIR||'uploads'; fs.mkdirSync(dir,{recursive:true});
const storage=multer.diskStorage({destination:dir,filename:(req,file,cb)=>cb(null,`${Date.now()}-${Math.random().toString(36).slice(2)}${path.extname(file.originalname).toLowerCase()}`)});
const allowed=new Set(['.png','.jpg','.jpeg','.webp','.gif','.pdf','.txt','.doc','.docx','.xls','.xlsx','.csv','.zip']);
export const upload=multer({storage,limits:{fileSize:10*1024*1024},fileFilter:(req,file,cb)=>allowed.has(path.extname(file.originalname).toLowerCase())?cb(null,true):cb(new Error('File type not allowed'))});
