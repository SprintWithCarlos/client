import './card.css'
import { Uploader } from '../uploader/Uploader'
import { ProgressBar } from '../progressBar/ProgressBar'
import {Success} from '../success/Success'
import { useState } from 'react'
export const Card = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    return (
       <div className="card">
            {/* <ProgressBar/>  */}
           {(!isLoading && !success )&& <Uploader/>}
           {isLoading && <ProgressBar/> }
           {success && <Success/>}
      </div> 
    )
}
