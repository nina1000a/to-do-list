import { useEffect, useState } from "react";

function TriTest(){
    var mnb=[1,2,3,4,5,6,7,8,9];
    const [nb,setNb] = useState([1,2,3,4,5,6,7,8,9])
    
    const filter = (i)=>{
        if(i===0){
            setNb(mnb.filter((i)=>i%2===0))
        }
        else{
            setNb(mnb.filter((i)=>i%2===1))
        }
    }

    

    return (
        <>
            <ul>
                {nb.map((i)=>(<li>{i}</li>))}
            </ul>
            <button onClick={()=>filter(0)}>Pairs</button>
            <button onClick={()=>filter(1)}>Impairs</button>
        </>
    )
}

export default TriTest;