import axios from 'axios';
export const API=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:5000/api'});
API.interceptors.request.use(c=>{const t=localStorage.getItem('nexora_token');if(t)c.headers.Authorization=`Bearer ${t}`;const w=localStorage.getItem('nexora_workspace_id');if(w)c.headers['X-Workspace-Id']=w;return c});
export const get=path=>API.get(path).then(r=>r.data);export const post=(path,data)=>API.post(path,data).then(r=>r.data);export const put=(path,data)=>API.put(path,data).then(r=>r.data);export const del=path=>API.delete(path).then(r=>r.data);
