import './text.css'
import { useState} from 'react';
export const Text = () => {
    const [textSelected, setTextSelected] = useState(null)
  const [rect, setRect] = useState({})
  const [copied, setCopied] = useState(false)
  window.addEventListener("keydown", (e)=>{
    if ((e.ctrlKey && e.key === 'c') || (e.metaKey && e.key === 'c')) {
      removeControl()  
    }
  }, false)

  const removeControl = ()=>{
      setCopied(!copied)
      setTextSelected(null)
    }
    
  const getSelectedText = (e) =>{
    setTextSelected(null)
    let selection = document.getSelection()
    let text = selection.toString()
    let rect = selection.getRangeAt(0).getBoundingClientRect(); 
    setCopied(false)
    setTextSelected(text)
    setRect(rect)
  }
  
  const Control = ({rect}) =>{
    
    const style = {
      position: "absolute",
      color: "white",
      backgroundColor: "black",
      width: 200,
      height: 40,
      top: (rect.top - 48) + window.scrollY,
      left: (rect.left + rect.width / 2) - 40,
      transition: "all 3s ease-in-out"
    }
    
    const copyText = async()=>{
      const inputEl = document.createElement('input')
      inputEl.setAttribute('value', textSelected)
      document.body.appendChild(inputEl)
      inputEl.select()
      document.execCommand('copy')
      document.body.removeChild(inputEl)
      removeControl() 
    }
    return(
      <span style={style} onClick={copyText}>
        {!copied ? "Copy Text" : "Copied!"}
      </span>
    )
  }
    return (
        <>
            <p onPointerUp={getSelectedText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, enim quibusdam ipsa corrupti nisi placeat aliquid provident eligendi dolores minima laudantium nesciunt exercitationem explicabo quod cum illo ipsam, sapiente molestiae deleniti aliquam nobis, fuga eaque facilis aperiam. Minus cum reiciendis maiores dolorem, facere vel voluptate officia vitae quasi dignissimos in cumque possimus impedit quas ratione iusto eius necessitatibus nemo deleniti aliquid dolorum. Earum laudantium deserunt sint asperiores doloribus atque modi ut voluptates id doloremque! Excepturi, commodi, officiis obcaecati eveniet pariatur nisi saepe ratione fugiat eius ex ad porro, rem soluta nostrum? Sint quo quisquam, nesciunt est eum assumenda vitae autem!</p>
            {textSelected && <h1><Control rect={rect}/></h1>}
        </>
    )
}

  