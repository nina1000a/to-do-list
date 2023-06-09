import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Text from 'react'
import {BsFillPencilFill,BsCheckCircleFill}  from 'react-icons/bs'
import FormControl from 'react-bootstrap/FormControl'
import FormText from "react-bootstrap/esm/FormText"
import axios from "axios"

function Task({task,listId,reload}) {
    const [mtask,setMtask]=useState(task)
    const [editing, setEditing] = useState(false)
    const [label,setLabel] = useState(task.label)
    const [checked,setChecked] = useState(task.done)
    

    const upadeTask = async (listId,task)=>{
    
        const response = await  axios.put(`http://localhost:8081/lists/${listId}/tasks`,task);
       
    }

    return (
       
        <>
            <td> 
                { !editing &&
                <>
                    <Form.Check 
                        type='checkbox'
                        id='checkbox'
                        inline
                        checked={checked}
                        onChange={ async ()=>{
                             await upadeTask(listId,{_id: task._id, label : task.label, done : !checked})
                             setChecked(!checked);
                             reload();
                             
                            }}
                    />
                    <span style={ checked?{ textDecorationLine: 'line-through' ,color : 'gray', fontStyle:'italic'}:{}}>{mtask.label} </span>                   
                </>
                }
                {
                    editing &&
                <FormControl
                    placeholder="Nouveau nom"
                    onChange={(e)=>{setLabel(e.target.value)}}
                    aria-label="Default"
                    
                    value={label}
                    aria-describedby="inputGroup-sizing-default"
                    onBlur={ async ()=>  { 
                        if(label.length!==0){
                            const t={_id: task._id, label : label, done : checked} ;
                            await upadeTask(listId,t) ;
                            setMtask(t); 
                            reload();
                        }
                        else{
                            setLabel(mtask.label)
                        }
    
                        setEditing(false)}
                        } 
                        autoFocus={true}
                />
                }
            </td>
            
            <td>
                { !editing && <BsFillPencilFill title='Modifier' color='blue' onClick={()=>{setEditing(true); console.log(task)}} /> }
                { editing && <BsCheckCircleFill title='Valider' color='green' className="ms-1 mt-1" onClick={ async ()=> { 
                    if(label.length!==0){
                        const t={_id: task._id, label : label, done : checked} ;
                       await upadeTask(listId,t) ;
                        setMtask(t); 
                        reload();
                    }
                    else{
                        setLabel(mtask.label)
                    }

                    setEditing(false)}
                    }  
                    />}
            </td>
            
        </>
        
    )
}
     

export default Task