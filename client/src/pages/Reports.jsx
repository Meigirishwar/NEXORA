import {useEffect,useMemo,useState} from 'react';
import {get} from '../services/api';
import {Stat} from '../components/UI';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,PieChart,Pie,Cell,CartesianGrid,Legend} from 'recharts';
import {BarChart3,CheckSquare,ShieldAlert,Users,Printer,Filter,CalendarDays,FolderKanban,Target} from 'lucide-react';

const TASK_STATUSES=['Backlog','To Do','In Progress','In Review','Done'];
const SEVERITIES=['Critical','Major','Minor','Trivial'];
const COLORS=['#2563eb','#06b6d4','#8b5cf6','#f59e0b'];

export default function Reports(){
  const[d,setD]=useState(null),[projects,setProjects]=useState([]),[project,setProject]=useState('all');
  useEffect(()=>{get('/projects?includeArchived=true').then(setProjects).catch(()=>setProjects([]))},[]);
  useEffect(()=>{setD(null);get(`/reports${project!=='all'?`?project=${project}`:''}`).then(setD).catch(()=>setD({summary:{projects:0,tasks:0,completedTasks:0,openIssues:0,members:0},tasksByStatus:[],issuesBySeverity:[],tasksByPriority:[],projectDetails:null}))},[project]);
  const taskData=useMemo(()=>{const map=new Map((d?.tasksByStatus||[]).map(x=>[String(x._id),x.count]));return TASK_STATUSES.map(name=>({name,value:map.get(name)||0}))},[d]);
  const severityData=useMemo(()=>{const map=new Map((d?.issuesBySeverity||[]).map(x=>[String(x._id),x.count]));return SEVERITIES.map(name=>({name,value:map.get(name)||0}))},[d]);
  if(!d)return <div className="center">Loading reports…</div>;
  const selected=projects.find(p=>String(p._id)===String(project));
  const selectedName=selected?.name||d.projectDetails?.name;
  const totalTasks=d.summary.tasks||0;
  const completed=d.summary.completedTasks||0;
  const progress=totalTasks?Math.round(completed/totalTasks*100):0;
  return <><div className="page-head"><div><span className="eyebrow">INSIGHTS</span><h1>Reports & Analytics</h1><p>{selectedName?`Detailed delivery intelligence for ${selectedName}.`:'Workspace-wide delivery intelligence across every active project.'}</p></div><div className="page-actions"><label className="period-select"><Filter size={15}/><select value={project} onChange={e=>setProject(e.target.value)}><option value="all">All projects</option>{projects.map(p=><option key={p._id} value={p._id}>{p.key} — {p.name}{p.archived?' · Archived':''}</option>)}</select></label><button className="btn secondary" onClick={()=>window.print()}><Printer size={15}/> Print report</button></div></div>
  <div className="print-report-head"><b>NEXORA · {selectedName||'Workspace'}</b><span>Report generated {new Date().toLocaleString()} · Scope: {selectedName||'All active projects'}</span></div>
  <div className="stats"><Stat label="Projects" value={d.summary.projects} icon={BarChart3}/><Stat label="Tasks" value={d.summary.tasks} icon={CheckSquare}/><Stat label="Completed" value={d.summary.completedTasks} icon={CheckSquare}/><Stat label="Open issues" value={d.summary.openIssues} icon={ShieldAlert}/><Stat label="Members" value={d.summary.members} icon={Users}/></div>
  {d.projectDetails&&<div className="card report-project-banner"><div className="report-project-title"><div><span className="key">{d.projectDetails.key}</span><h2>{d.projectDetails.name}</h2><p>{d.projectDetails.description||'No project description provided.'}</p></div><span className={`badge ${(d.projectDetails.status||'Planning').toLowerCase().replaceAll(' ','-')}`}>{d.projectDetails.status}</span></div><div className="report-project-meta"><span><Target/> Completion <b>{totalTasks?`${progress}%`:'No tasks yet'}</b></span><span><CalendarDays/> Due <b>{d.projectDetails.endDate?new Date(d.projectDetails.endDate).toLocaleDateString():'No due date'}</b></span><span><FolderKanban/> Priority <b>{d.projectDetails.priority||'—'}</b></span><span>PM <b>{d.projectDetails.manager?.name||'—'}</b></span></div>{totalTasks>0&&<div className="report-progress"><i style={{width:`${progress}%`}}/></div>}</div>}
  <div className="grid two"><div className="card chart-card"><div className="card-head"><div><h3>Tasks by status</h3><p>Current workload distribution · hover for exact counts.</p></div></div><div className="chart report-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={taskData}><CartesianGrid vertical={false}/><XAxis dataKey="name" tickLine={false}/><YAxis allowDecimals={false}/><Tooltip/><Bar dataKey="value" fill="#2563eb" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer>{!totalTasks&&<div className="chart-empty">No tasks are assigned to this scope yet.</div>}</div></div>
  <div className="card chart-card"><div className="card-head"><div><h3>Issue severity</h3><p>Quality risk snapshot · hover for exact counts.</p></div></div><div className="chart report-chart"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={severityData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={4}>{severityData.map((x,i)=><Cell key={x.name} fill={COLORS[i]}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer>{!d.summary.issues&&<div className="chart-empty">No issues have been reported for this scope yet.</div>}</div></div></div>
  <div className="card report-scope-card"><h3>Report scope</h3><p>This report includes project progress, task completion, open issues, sprint workload and workspace members for the selected scope. Printing captures the workspace/project name, scope and generation time.</p></div></>
}
