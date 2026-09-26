import {useState} from 'react';import {X,Plus,Check,AlertCircle} from 'lucide-react';
export function Button({children,variant='primary',...p}){return <button className={`btn ${variant}`} {...p}>{children}</button>}
export function Modal({title,children,onClose}){return <div className="overlay"><div className="modal"><div className="modal-head"><h3>{title}</h3><button className="icon" onClick={onClose}><X size={18}/></button></div>{children}</div></div>}
export function Stat({label,value,icon:Icon}){return <div className="stat"><div><span>{label}</span><strong>{value}</strong></div>{Icon&&<div className="stat-icon"><Icon size={20}/></div>}</div>}
export function Empty({text}){return <div className="empty"><div className="empty-icon"><AlertCircle size={24}/></div><h3>{text}</h3><p>Try changing the filters or add a new record.</p></div>}
export function Toast({message,onClose}){return <div className="toast"><Check size={16}/>{message}<button className="icon" onClick={onClose}><X size={14}/></button></div>}
export function Field({label,...p}){return <label className="field"><span>{label}</span><input {...p}/></label>}
export function Select({label,children,...p}){return <label className="field"><span>{label}</span><select {...p}>{children}</select></label>}
