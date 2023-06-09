import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import {useState} from 'react'


function TasksFilter({onClick}){
    const [key,setKey] = useState('all');
    return (
        <InputGroup className="mb-3 mt-3">
            <Button  variant={key==='all'?'secondary':'white'} onClick={ ()=>{  onClick('all') ;setKey("all")} }>Toutes</Button>
            <Button  variant={key==='todo'?'secondary':'white'} onClick={ ()=>{  onClick('todo') ;setKey("todo")} }>A faire</Button>
            <Button  variant={key==='done'?'secondary':'white'} onClick={ ()=>{  onClick('done') ;setKey("done")} }>Faites</Button>
        </InputGroup>
    )
}

export default TasksFilter