import React, { useState } from 'react'
import axios from 'axios';
export default function Rough() {
    const [email,setEmail] = useState('');

    const handleSubmit = async() =>{ 
        const rest = await axios.post('http://localhost:5008/getuser',{
            email : email
        })  
        .then((res) => {
            console.log(res.data.result.email);
            if(res.data.result.status === 404)  
            {
                alert('error');
            }
            else
            {
                alert('added')
            }
        }).catch((error) => console.log(error,'err'));
        console.log(rest.data,'rest');
        // const rest2 = await rest.json();
        // console.log(rest2,'rest2');
    }
  return (
    <div style={{marginTop : '70px'}}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
