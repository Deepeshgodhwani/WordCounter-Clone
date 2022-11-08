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

    const handleExtraSpaces=()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
      }
       

  return (
    <div className='flex py-3 space-x-4'>
      <div className=' pl-24 flex flex-col relative w-[70%]  '>
          <div className=' bg-[rgb(217,237,247)] '>
            <p className='text-[rgb(66,77,97)] font-[calibri] text-4xl font-bold py-3 px-3'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
          </div>
          <div className='btn bg-[rgb(245,245,245)] flex py-1  border-1 border-[rgb(221,221,221)] rounded-md mt-2 px-2'>
            <div className="flex   items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={changeToUppercase}>
            <p className='text-[0.6rem]'>UPPERCASE</p></div>
            <div className="flex  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={changeToLowercase}>
            <p className='text-[0.6rem]'>LOWERCASE</p>
            </div>
            <div className="flex items-center py-1 px-1 rounded-md  flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={handleExtraSpaces}>
            <i class="fa-solid fa-eraser"></i>  
            <p className='text-[0.6rem] '>CLEAR EXTRA SPACES</p></div>
            <div onClick={clearText} className="flex  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="  fa-solid fa-trash-can"></i> 
            <p className='text-[0.6rem]'>CLEAR</p></div>
            <div className="flex  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={copyText}><i class="fa-solid fa-copy"></i>
             <p className='text-[0.6rem]'>COPY</p></div>
            <div className="flex  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="fa-solid fa-left-long"></i>
            <p className='text-[0.6rem]'>UNDO</p></div>
            <div className="flex  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="fa-solid fa-right-long"></i>
            <p className='text-[0.6rem]'>REDO</p></div>
          </div>
            <textarea className='p-2 outline-blue-200 shadow-md border-1 border-[rgb(221,221,221)] text-sm ' placeholder='Start typing, or copy and paste your document here...'  rows='10' cols='100' value={text} onChange={valueChanged} ></textarea><br/>
           <div className=' border-1 border-[rgb(221,221,221)] details bg-[rgb(245,245,245)]'>
           <p className='text-[rgb(66,77,97)] font-[calibri] text-xl font-bold py-2 px-3'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
            </div> 
      </div>
      <div>
        <p>Details</p>
        <div><p>Words</p><p></p>{text.split(" ").filter((element)=>{return element.length!==0}).length}</div>
        <div><p>Characters</p><p>{text.length}</p></div>
        <div><p>Sentences</p><p>{text.split(".").filter((element)=>{return element.length!==0}).length}</p></div>
        <div><p>Paragraphs</p><p></p></div>
        <div><p>Reading Time</p>{(0.008 * text.split(" ").length)*60}</div>
        <div><p>Speaking Time</p></div>

      </div>
    </div>
  )
}

