import './success.css'
import Image from './image.jpeg'

export const Success = () => {
    return (
        <div className="success">
             <section className="top">
             <i className="fas fa-check-circle"></i>
               <h1>Uploaded Successfully!</h1>
           </section>
           <section className="middle">
               <div className="dropContainer">
                    <img src={Image} alt="mountains illustration" />
               </div>
           </section>
           <section className="bottom">
           <div className="linkContainer">
               <p>https://images.yourdomain.com/photo-1496950866446-325...</p>
           <button className="btn">
               Copy Link
            </button>
           </div>
            
           </section>
        </div>
    )
}
