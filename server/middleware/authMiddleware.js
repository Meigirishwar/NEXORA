import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function protect(req,res,next){
  try{
    const token=(req.headers.authorization||'').startsWith('Bearer ')?req.headers.authorization.slice(7):null;
    if(!token) return res.status(401).json({message:'Authentication required'});
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id).select('-password');
    if(!req.user||!req.user.active) return res.status(401).json({message:'Account unavailable'});
    next();
  }catch(e){return res.status(401).json({message:'Invalid or expired token'});}
}
export const roles=(...allowed)=>(req,res,next)=>allowed.includes(req.user.role)?next():res.status(403).json({message:'Access denied'});
