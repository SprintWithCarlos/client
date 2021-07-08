import './card.css'
import { Uploader } from '../uploader/Uploader'
import { ProgressBar } from '../progressBar/ProgressBar'
import {Success} from '../success/Success'
import { useContext } from 'react'
import { Context } from '../../Context'
export const Card = () => {
  const { isUploading, success, error} = useContext(Context)  
  return (
       <div className="card">
            {/* <ProgressBar/>  */}
           {(!isUploading && !success )&& <Uploader />}
           {isUploading && <ProgressBar /> }
           {success && <Success />}
      </div> 
    )
}
