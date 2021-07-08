import './uploader.css'
import CardImage from './image.svg'
export const Uploader = () => {
    return (
       <section className="uploader">
           <section className="top">
               <h1>Upload your image</h1>
               <p>File should be Jpeg, Png,...</p>
           </section>
           <section className="middle">
               <div className="dropContainer">
                    <img src={CardImage} alt="mountains illustration" />
                    <p >
                    Drag & Drop your image here
                    </p>
               </div>
               
           </section>
           <section className="bottom">
           <p >
                   Or
               </p>
            <button className="btn">
                Choose a file
            </button>
           </section>
       </section> 
    )
}
