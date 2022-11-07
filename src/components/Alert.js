import React from 'react'

export default function Alert(props) {
      
     const capitalize =(word) =>{
          
           let firstWord=word.charAt(0)
           
        return  firstWord.toUpperCase() + word.slice(1)
    
     }

  return (
    <>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.mssge}
        </div>
         
  }
    </>
  )
}
