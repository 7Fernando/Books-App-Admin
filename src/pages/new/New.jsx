import React, { useState, useEffect } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { postBook } from "../../redux/actions/books";
import { useDispatch } from "react-redux";
import { app } from '../../fb'



const New = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    title: '',
    author: '',
    topic: '',
    epub: '',
    cover: '',
    language: '',
  })
  let fileUrl = ""
  let imageUrl = ""

  async function handleSubmit(e) {
    //e.preventDefault(),
    console.log(input)
    dispatch(postBook(input))
    //sets the "relation" in firebase
    const filename = e.target.title.value
    const colectionRef = app.firestore().collection('bookflixfiles')
    const newUpload = await colectionRef.doc(filename.name).set(
      { name: filename, url: fileUrl, image:imageUrl})
    alert('New Book Created')
    setInput({
      title: '',
      author: '',
      topic: '',
      epub: '',
      cover: '',
      language: '',
    })
  }
  const handleCover = async (e)=>{
      const imageFile = e.target.files[0]
      const imageRef = app.storage().ref()
      const imagePath = imageRef.child(imageFile.name)
      try{
        await imagePath.put(imageFile)
        imageUrl = await imagePath.getDownloadURL()
        console.log("file loaded in: ", imageUrl)
        setInput({
          ...input,
          [e.target.name]: imageUrl
        })
      }catch(error){
        console.log(error)
      }
  }
  const handleBook = async (e) => {
    const epubfile = e.target.files[0]
    const storageref = app.storage().ref()
    const filePath = storageref.child(epubfile.name)
    console.log(filePath)
    try {
      await filePath.put(epubfile)
      fileUrl = await filePath.getDownloadURL()
      setInput({
        ...input,
        [e.target.name]: fileUrl
      })
    } catch (error) {
      console.log(error)
    }
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="formInput">
                <label>Title</label>
                <input type='text' name='title' value={input.title} onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Author</label>
                <input type='text' name='author' value={input.author} onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Language</label>
                <input type='text' name='language' value={input.language} onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Topic</label>
                <input type='text' name='topic' value={input.topic} onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Epub</label>
                <input type='file' name='epub'  /*value={input.epub}*/ onChange={handleBook} />
              </div>
              <div className="formInput">
                <label>Cover</label>
                <input type='file' name='cover' /*value={input.cover}*/ onChange={handleCover} />
              </div>

              <button type="submit" value="Submit"
                disabled={
                  !input.title ||
                  !input.author ||
                  !input.language ||
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
