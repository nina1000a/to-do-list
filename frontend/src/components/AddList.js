import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {useState} from 'react'

function AddList({onClick}){
    const [label, setLabel] = useState("");
    return (
        <InputGroup className="mb-3 mt-3">
                
                <FormControl
                placeholder='Saisissez une nouvelle liste'
                onChange={(e)=>{setLabel(e.target.value)}}
                aria-label="Default"
                
                value={label}
                aria-describedby="inputGroup-sizing-default"
                />
                <Button id="inputGroup-sizing-default" onClick={async ()=>{ await onClick(label) ;setLabel("")} }>Ajouter liste</Button>
        </InputGroup>
    )
}

export default AddList