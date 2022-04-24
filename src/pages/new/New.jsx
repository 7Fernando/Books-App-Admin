import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {postBook} from "../../redux/actions/books";
import { useDispatch } from "react-redux";


const New = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    title:'',
    author:'',
    topic:'',
    epub:'',
    cover:'',
    language: '',

 })

 function handleSubmit(e){
  //e.preventDefault(),
  console.log(input)
  dispatch(postBook(input))
  alert('New Book Created')
  setInput({
    title:'',
    author:'',
    topic:'',
    epub:'',
    cover:'',
    language: '',
  })
}

function handleChange(e){
  setInput({
      ...input, 
      [e.target.name] : e.target.value
  })
  
}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Book</h1>
        </div>
        <div className="bottom">
          <div className="left"> 
          </div>
          <div className="right">
            <form onSubmit={(e)=> handleSubmit(e)}>
              <div className="formInput">
              <label>Title</label>
              <input type='text' name='title' value={input.title} onChange={handleChange}/>
              </div>
              <div className="formInput">
              <label>Author</label>
              <input type='text' name='author'  value={input.author} onChange={handleChange}/>
              </div>
              <div className="formInput">
              <label>Language</label>
              <input type='text' name='language'  value={input.language}onChange={handleChange} />
              </div>
              <div className="formInput">
              <label>Topic</label>
              <input type='text' name='topic'  value={input.topic}  onChange={handleChange}/>
              </div>
              <div className="formInput">
              <label>Epub</label>
              <input type='text' name='epub'  value={input.epub} onChange={handleChange}/>
              </div>
              <div className="formInput">
              <label>Cover</label>
              <input type='text' name='cover'  value={input.cover} onChange={handleChange}/>
              </div>

                     <button  type="submit" value="Submit"
                           disabled={
                           !input.title ||
                           !input.author ||
                           !input.language||  
                           !input.topic
                           }>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
