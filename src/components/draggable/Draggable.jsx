import "./dragabble.css";

import CardImage from "./image.svg";
import React from "react";
import { useState, useContext } from "react";
import {Context} from '../../Context'
export const Draggable = () => {
  const [file, setFile] = useState(false);
  const [active, setActive] = useState(false)
  const [data, setData] = useState(false)
  const {dispatch} = useContext(Context)
  const handleDragEnter = (e) => {
    e.preventDefault();
    setActive(!active)
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setActive(!active)
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log(handleDrop);
    let files = [...e.dataTransfer.files];
    if(files){
      const file = files[0]
      console.log(file)
      setFile(file)
    }
    e.stopPropagation();
  };
  const handleClick = async ()=>{
    const data = new FormData();
    const fileName = Date.now() + "_" + file.name.replace(/\s/g,'')
    data.append("name", fileName)
    data.append("file", file)
    setData(data)
    dispatch({type: "START_UPLOADING"})
   const host = "api2-1as2.onrender.com"
  // const host = "localhost:5001"
  try {
    const res = await fetch(`https://${host}/upload`, {
      method: "POST",
      body: data
    });
    const result = await res.json();
    console.log(result)
    result && dispatch({ type: "UPLOADING_SUCCESS", payload: result.url });
  } catch (err) {
    dispatch({ type: "UPLOADING_FAILURE", payload: err });
  }
  }
  return (<section className="dropWrapper">


    <div
      className={!active ? "dropContainer": "dropContainer active"}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      style={file ? {border: "none"}: {border: "1px dashed #97BEF4"}}
      >
      
    <img
      src={!file ? CardImage : URL.createObjectURL(file)}
      alt="mountains illustration"
      className={file ? "dropImg" : ""}
      />
      {file && <i className="fas fa-times-circle" onClick={()=>setFile(false)}></i>}
    {!file && <p>Drag & Drop your image here</p>}

    </div>
    <section className="bottom">
      {!file ? <p>Or</p> :  <p>Preview</p>}
      <input style={{"display": "none"}} type="file" id="file" accept=".png, .jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
      {!file ?
     <label htmlFor="file" className="btn">
         Choose a file
     </label>:
     <button className="btn" onClick={handleClick}>
          Upload
     </button>


      }
    </section>
      </section>


  )
      
  
    
};
