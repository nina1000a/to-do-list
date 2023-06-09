import Form from 'react-bootstrap/Form';

function ListSelector({list,onChange}){
   
    return (
        <Form.Select aria-label="Default select example" onChange={(e)=>{ onChange(e.target.value)}} defaultValue={null} >
            <option value={-1}>Sélectionner une liste</option>
            {

                list.map((l)=> (
                   
                    <option key={l._id} value={l._id} >{l.name}</option>
                ))
            }
        </Form.Select>
    )
}

export default ListSelector