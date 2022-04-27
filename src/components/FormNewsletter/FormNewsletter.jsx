
import { Checkbox, selectRow } from '@mui/material';
import React from 'react';
import { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mailUsers} from '../../redux/actions/user'

const FormNewsletter= () => {
const allMails = useSelector((state)=> state.user.allUser.map((m) => m.mail))
const dispatch = useDispatch()
const [data, setData] = useState(allMails);

 

 

    const [input, setInput] = useState({
        mail : data,
        message : ''
    })


    function handleSubmit(e){
      e.preventDefault();
      console.log(input)
      dispatch(mailUsers(input))
      alert('NewsLetter send')
      setInput({
          mail:'',
          message:''
      })
  }
    
    function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      })
     
  }


//   function handleSelect(e){
//     if(input.allMails.find((p) => p ===  e.target.value)){
//        return 
//     }   

//    setInput({
//        ...input,
//        mail: [...input.countries, e.target.value]
//    })
   
// }

  return (
    <div>
        <h1>Send Newsletter</h1>
        
            <form onSubmit={handleSubmit}>
                 <div>
                <label>Emails</label>
                <input type='email' name='mail'
                value={input.mail}
                onChange={handleChange} />
                </div>
                 
                



                {/* <div >
                    <label>Users</label>
                    <select value={input.mail} name='mail' onChange={handleSelect} >
                    <option selected="true" disabled="">Select Country</option>
                    { 
                      allMails.map((m)=>(
                       <option value={m.name} key={m.id}>{m.mail}</option>)
                       ) 
                    }
                    </select>
                    
                       */}


                
                    {/* <div className={Styles.countriesSelected}>
                    {input.allMails.map(el => 
                    <div key={el.id}>
                        <h4>{el}</h4>
                        <button className="btnDelete" onClick={() => handleDelete(el)}>x</button>
                    </div>
                    )}
                </div> */}

          






                <div>
                <label>Messege</label>
                <textarea type='text' name='message'  rows='10' cols='100'
                onChange={handleChange} 
                value={input.message}/>
                </div>

                <div>
                
                <input  type="submit" value="Submit"/>
                </div>

            </form>
        
    </div>
  )
}

export default FormNewsletter