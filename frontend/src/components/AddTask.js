import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {useState} from 'react'

function AddTask({onClick}){
    const [label, setLabel] = useState("");
    return (
        <InputGroup className="mb-3 mt-3">
                
                <FormControl
                placeholder='Saisissez une nouvelle tâche'
                onChange={(e)=>{setLabel(e.target.value)}}
                aria-label="Default"
                
                value={label}
                aria-describedby="inputGroup-sizing-default"
                />
                <Button id="inputGroup-sizing-default" onClick={async ()=>{ await onClick(label) ;setLabel("")} }>Ajouter tâche</Button>
        </InputGroup>
    )
}

export default AddTask