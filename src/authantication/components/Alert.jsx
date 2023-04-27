import {useState,useEffect} from 'react'

const Alert = ({type,message,delay,delayTime}) => {
    const [showAlert, setShowAlert] = useState(true)

    const closeAlert =(e)=>{
        e.target.parentElement.parentElement.classList.add("fadeAlert")

        setTimeout(()=>{
            setShowAlert(false)
        },400)
    }

    useEffect(() => {
        delay &&
      setTimeout(()=>{
        setShowAlert(false)
      },delayTime)
    })
    
  return (
    showAlert && 
    <div className={`alert alert-${type}`}>
        <div className='alert-close'>
            <span>{message}</span>
            <button className='btn-close' onClick={closeAlert}>X</button>
        </div>
    </div>
  )
}

export default Alert





