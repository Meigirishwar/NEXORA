import {createContext,useContext,useEffect,useMemo,useState} from 'react';
import {get,post,put,del} from '../services/api';
import {useAuth} from './AuthContext';

const C=createContext(null);
export function WorkspaceProvider({children}){
  const {user}=useAuth();
  const [workspaces,setWorkspaces]=useState([]),[current,setCurrent]=useState(null),[loading,setLoading]=useState(true);
  const load=async()=>{
    if(!user){setWorkspaces([]);setCurrent(null);setLoading(false);return;}
    setLoading(true);
    try{
      const list=await get('/workspaces'); setWorkspaces(list);
      const saved=localStorage.getItem('nexora_workspace_id');
      const selected=list.find(w=>String(w._id)===saved) || (list.length===1?list[0]:null);
      if(selected){localStorage.setItem('nexora_workspace_id',selected._id);setCurrent(selected)}
      else {localStorage.removeItem('nexora_workspace_id');setCurrent(null)}
    }catch(e){setWorkspaces([]);setCurrent(null)}finally{setLoading(false)}
  };
  useEffect(()=>{load()},[user]);
  const selectWorkspace=(workspace)=>{localStorage.setItem('nexora_workspace_id',workspace._id);setCurrent(workspace)};
  const clearWorkspace=()=>{localStorage.removeItem('nexora_workspace_id');setCurrent(null)};
  const createWorkspace=async(data)=>{const w=await post('/workspaces',data);await load();selectWorkspace(w);return w};
  const refresh=load;
  const value=useMemo(()=>({workspaces,current,loading,selectWorkspace,clearWorkspace,createWorkspace,refresh}),[workspaces,current,loading]);
  return <C.Provider value={value}>{children}</C.Provider>;
}
export const useWorkspace=()=>useContext(C);
