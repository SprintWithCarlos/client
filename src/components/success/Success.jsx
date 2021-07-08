import './success.css'
import Image from './image.jpeg'
import { useContext } from 'react'
import { Context } from '../../Context'

export const Success = () => {
    const {url, dispatch} =  useContext(Context)
    
    return (
        <div className="success">
             <section className="top">
             <i className="fas fa-check-circle"></i>
               <h1>Uploaded Successfully!</h1>
           </section>
           <section className="middle">
               <div className="dropContainer">
                   <a href={url}>
                    <img src={url} alt="uploaded" />
                   </a>
               </div>
           </section>
           <section className="bottom">
           <div className="linkContainer">
               <p>{url}</p>
           <button className="btn" onClick={()=>dispatch({type: "RESTART" })}>
               Copy Link
            </button>
           </div>
            
           </section>
        </div>
    )
}
