
import React from 'react';
import { useState} from "react";
import { useSelector } from 'react-redux';

const FormNewsletter= () => {
const allMails = useSelector((state)=> state.user.allUser.map((m)=> m.mail))
const [data, setData] = useState(allMails);

  console.log('todos los mails', allMails)


    const [input, setInput] = useState({
        mail : '',
        subjet :'',
        messege : ''
    })


    function handleSubmit(){
      //dispatch de la accion post(input)
      //setInput({
        //mail: ''
        //subject:''
        //messege:''
    //  })
    }
    
    function handlechange(e){
      e.preventDefault();
      
    }




  return (
    <div>
        <h1>Envio newsletter</h1>
        
            <form onSubmit={handleSubmit}>
                <div>
                <label>User Email</label>
                <input type='email' name='mail' value={input.mail} onChange={handlechange} />
                </div>

                <div>
                <label>Subjet</label>
                <input type='text' name='subjet' value={input.subjet} />
                </div>

                <div>
                <label>Messege</label>
                <textarea type='text' name='messege' value={input.messege} rows='10' cols='100' />
                </div>

                <div>
                
                <input 
                           type="submit" value="Submit"
                           disabled={
                           !input.mail ||
                           !input.subjet ||
                           !input.messege 
                       
                           }/>
                </div>

            </form>
        
    </div>
  )
}

export default FormNewsletter