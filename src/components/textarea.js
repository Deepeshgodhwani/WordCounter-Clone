import React, { useState } from 'react';


import uppercaseImg from '../images/uppercase-interface-button.png'
import lowercaseImg from '../images/lowercase-interface-symbol.png'

export default function Textarea(props) {

    const [text, setText]= useState('');


    function valueChanged(e){
     
         setText(e.target.value);
    }

    function changeToUppercase(){

        setText(text.toUpperCase());
     
    }

    const changeToLowercase = ()=>{
        setText(text.toLowerCase());
    }

    const clearText = () =>{
        setText('');
    }

    const copyText= () =>{
        navigator.clipboard.writeText(text);
    }

    const undoText=()=>{
     
      var sel = window.getSelection();
      document.execCommand('undo', false, null);
      document.execCommand('copy', false, null);
       setText(sel.toString());
    }

    const handleExtraSpaces=()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
      }
       

  return (
    <div className='flex flex-wrap py-10 px-4 lg:px-0 gap-x-10'>
      
      <div className=' lg:pl-24 flex flex-col relative w-[100%]  md:px-0 lg:w-[70%]'>
          <div className=' bg-[rgb(217,237,247)] '>
            <p className='text-[rgb(66,77,97)] font-[calibri] text-4xl font-bold py-3 px-3'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
          </div>
          <div className='btn bg-[rgb(245,245,245)] flex-wrap flex py-1  border-1 border-[rgb(221,221,221)] rounded-md mt-2 px-2'>
            <div className="flex  cursor-pointer items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={changeToUppercase}>
              <img alt='' src={uppercaseImg} className="w-4"></img>
            <p className='text-[0.6rem]'>UPPERCASE</p></div>
            <div className="flex cursor-pointer  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={changeToLowercase}>
              <img src={lowercaseImg} className="w-4" alt=""></img>
            <p className='text-[0.6rem]'>LOWERCASE</p>
            </div>
            <div className="flex items-center cursor-pointer py-1 px-1 pt-2 rounded-md  flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={handleExtraSpaces}>
            <i class="fa-solid fa-eraser"></i>  
            <p className='text-[0.6rem] '>CLEAR EXTRA SPACES</p></div>
            <div onClick={clearText} className="flex cursor-pointer pt-2 items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="  fa-solid fa-trash-can"></i> 
            <p className='text-[0.6rem]'>CLEAR</p></div>
            <div className="flex cursor-pointer  items-center pt-2 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]" onClick={copyText}><i class="fa-solid fa-copy"></i>
             <p className='text-[0.6rem]'>COPY</p></div>
            <div onClick={undoText} className="flex cursor-pointer items-center pt-2 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="fa-solid fa-left-long"></i>
            <p className='text-[0.6rem]'>UNDO</p></div>
            <div className="flex cursor-pointer  items-center pt-2 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"><i class="fa-solid fa-right-long"></i>
            <p className='text-[0.6rem]'>REDO</p></div>
          </div>
            <textarea id='text'  className='p-2 outline-blue-200 shadow-md border-1 border-[rgb(221,221,221)] text-sm ' placeholder='Start typing, or copy and paste your document here...'  rows='11' cols='100' value={text} onChange={valueChanged} ></textarea><br/>
           <div className=' -mt-5 rounded-md border-1 border-[rgb(221,221,221)] details bg-[rgb(245,245,245)]'>
           <p className='text-[rgb(66,77,97)] font-[calibri] text-xl font-bold py-2 px-3'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
            </div> 
      </div>
      <div className='border-[rgb(221,221,221)] w-[100%] lg:ml-24 xl:ml-0   lg:w-72 h-60  mt-20  border-1 rounded-md'>
        <p className='bg-[rgb(245,245,245)] px-2 py-2'>Details</p>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]'><p>Words</p>
        <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'>
          {text.split(" ").filter((element)=>{return element.length!==0}).length}
        </p>
        </div>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]' >
          <p>Characters</p>
          <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'>
            {text.length}</p></div>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]' >
          <p>Sentences</p>
          <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'>{text.split(".").filter((element)=>{return element.length!==0}).length}</p></div>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]'>
          <p>Paragraphs</p>
          <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'></p>
          </div>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]'>
          <p>Reading Time</p>
          <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'>
          {parseInt((0.008 * text.split(" ").length)*60)} sec
          </p>
          </div>
        <div className='flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]' >
          <p>Speaking Time</p>
         <p className='bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs'></p> 
          </div>

      </div>
    </div>
  )
}

