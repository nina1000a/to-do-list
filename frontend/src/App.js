
import './App.css';
import ListSelector from './components/ListSelector'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TasksFilter from './components/TasksFilter';
import TriTest from './components/TriTest';
import AddList from './components/AddList';










function App() {
  
  const [lists, setLists] = useState([]);
  const [list, setList] = useState(null);
  //const [tasks,setTasks] = useState([]);
  const [tasksAff,setTasksAff] = useState([]);

  const [creating,setCreating] = useState(false);
  const [getting,setGetting] = useState(false);
  const [selected,setSeleted] = useState(false);
  const [key,setKey] = useState("all");


  window.onload = async ()=> setLists(await fetchLists())

  const addList = async (name)=>{
    const newlist = {name:name,tasks : []};
    const response = await  axios.post("http://localhost:8081/lists/",newlist);
    setLists(response.data.data);
  }

  const  fetchLists = async ()=>{
    setGetting(true)
    const response = await  axios.get("http://localhost:8081/lists/")
    setGetting(false)
    return response.data;
  } 

  const createTask = async (id,label)=>{
    
    if(label.length!==0){
     
      setCreating(true)
      
      const response = await  axios.post(`http://localhost:8081/lists/${id}/tasks`,{task:label});
      console.log("j'y suis");
      console.log(response.data.data);
      console.log("j'y suis 2");
      setList(response.data.data);
      setCreating(false)
      
    }
    
  }

  const deleteTask = async (listId,taskId)=>{
    
      const response = await  axios.delete(`http://localhost:8081/lists/${listId}/tasks/${taskId}`);
      setList(response.data.data);
    
    
  }

  
  const reloadList = async (id)=>{
    const response = await  axios.get(`http://localhost:8081/lists/${id}`);
    if(response.data.data.length===1)
      setList(response.data.data[0]);
    console.log("list reloaded scfly")
  }

  const taskFilter = (key)=>{
    console.log(key)

    if(key==="done"){
       return list.tasks.filter((t)=>t.done)
    }
    else if(key==="todo"){
      return list.tasks.filter((t)=>!t.done)
    }
    else{
      return list.tasks
    }
    
  }
  
  
  useEffect(()=>{

      if(list){
        const ts=taskFilter(key);
        console.log(ts)
        setTasksAff(ts)
      }
      else{
        setTasksAff([])
      }
    
  },[list,key])

  

  const onChange = (id)=>{
      const lst= lists.find((l)=>l._id===id)
      console.log(lst)

      setList(lst)

      if(id==-1)
        setSeleted(false)
      else
        setSeleted(true)
  }

  return (
    <div className='col-6 offset-3 mt-5'>
      <h1>
        Todo List { getting && <div className="spinner-border text-secondary ms-auto" role="status" aria-hidden="true"></div>} </h1>
      <ListSelector  list={lists} onChange={onChange}/>
      <div className='card p-2 mt-3'>

        { !selected &&  <AddList onClick={async (name)=> await addList(name)}/> }
        
        { selected && 
        <>
            <AddTask  onClick={ async (label)=> await createTask(list._id,label)} creating={creating}/>
            { creating &&
              <div className=" ms-2 me-2 d-flex align-items-center">
                <strong>Création...</strong>
                <div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
              </div>
            }

            <Tasks tasks={tasksAff} onDelete={async (taskId)=>{await deleteTask(list._id,taskId)}} listId={list!=null?list._id:''} reload={async ()=>{if(list!=null) await reloadList(list._id)}}/>
            
            <TasksFilter onClick={(key)=>{setKey(key)}}/>
            {/*<TriTest /> */}
         </>}
      </div>
     
    </div>
  );
}

export default App;
