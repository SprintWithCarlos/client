import './progressBar.css'

export const ProgressBar = () => {
  return (
    <div className="wrapper">
      <span className="loading">Uploading...</span>
      <div className="progressBar">
        <div className="progress"></div>
      </div>
    </div> 
  )
}
