import React, { useState } from 'react'

export default function Textarea(props) {

    const [text, setText]= useState('');

    function valueChanged(e){
          
         setText(e.target.value);
    }

    function changeToUppercase(){

        setText(text.toUpperCase());
        props.showAlert("Text is changed to Upper case",'success')
    }

    const changeToLowercase = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text is changed to Lower case",'success')


    }

    const clearText = () =>{
        setText('');
        props.showAlert("Cleared",'success')


    }

    const copyText= () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied",'success')

    }
       
      
   
  
     
  return (
    <>
      <div className='container py-3' style={{color: props.mode==='dark'?'white':'black'}} >
         <h1>Enter the text to analyze below</h1>
         <textarea className='p-2' style={{backgroundColor:props.mode==='dark'?'black':'white',
         color:props.mode==='dark'?'white':'black'}} rows='8' value={text} onChange={valueChanged} cols='100'></textarea><br/>
        <button type="button" onClick={changeToUppercase} className="btn btn-primary btn mx-1">convert to uppercase</button>
        <button type="button" onClick={changeToLowercase} className="btn btn-primary btn mx-1">convert to lowercase</button>
        <button type="button" onClick={clearText} className="btn btn-primary btn mx-1">Clear Text</button>
        <button type="button" onClick={copyText} className="btn btn-primary btn mx-1">Copy Text</button>
        
      </div>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
         <h2>Text Summery</h2>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Preview</h3> 
      <p>{text}</p>
      </div>

    </>
  )
}

