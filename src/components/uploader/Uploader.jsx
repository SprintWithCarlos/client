import './uploader.css'

import { Draggable } from '../draggable/Draggable'
export const Uploader = () => {
    return (
       <section className="uploader">
           <section className="top">
               <h1>Upload your image</h1>
               <p>File should be Jpeg, Png,...</p>
           </section>
           <section className="middle">
               <Draggable/>
           </section>
           
       </section> 
    )
}
