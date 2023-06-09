import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import {BsFillPencilFill,BsFillTrashFill}  from 'react-icons/bs'
import {useState} from 'react'
import Task from './Task'

function Tasks({tasks,onDelete,listId,reload}){
    
    return (
        <div className='mt-3'>
            <Table striped bordered hover variant="ligth">
                
                
                <tbody>

                {
                     tasks.map((t)=> {
                        

                        return (
                           
                            <tr key={t._id}>
                                <Task task={t} listId={listId} reload={reload} />
                                <td>
                                    <BsFillTrashFill title='Supprimer' color='red' onClick={async ()=>{await onDelete(t._id)}}/>
                                </td>
                            </tr>
                        )}
                         )
                    
                    }
                    
                </tbody>
            </Table>

        </div>
    )
}

export default Tasks;