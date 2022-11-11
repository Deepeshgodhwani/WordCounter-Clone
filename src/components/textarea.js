import React, { useState } from "react";

import uppercaseImg from "../images/uppercase-interface-button.png";
import lowercaseImg from "../images/lowercase-interface-symbol.png";
import capitaliseImg from "../images/capitalise.png";
import justify from "../images/justify.png";
import Message from "./Message";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [paralen, setparalen] = useState(0);
  const [undo, setundo] = useState([]);
  const [redo, setredo] = useState([]);
  const [trigger, settrigger] = useState(false);
  const [message, setmessage] = useState("");

  const toggleBar = () => {
    settrigger(false);
  };

  // setTimeout(toggleBar, 3000);

  // update text value //
  function valueChanged(e) {
    setText(e.target.value);
  }

  //  change to uppercase //
  function changeToUppercase() {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      setText(text.toUpperCase());
      setmessage("Converted To Uppercase");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  }

  // change to lowercase //
  const changeToLowercase = () => {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      setText(text.toLowerCase());
      setmessage("Converted To Lowercase");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  };

  // To capitalise text //

  const firLetterUp = () => {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      let newText = text.split(" ");
      let finalArr = [];
      newText.forEach((element) => {
        let afterUp = element[0].toUpperCase();
        afterUp = afterUp.concat(element.substring(1));
        finalArr.push(afterUp);
      });
      setText(finalArr.join(" "));
      setmessage("Text Capitalised");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  };

  // change to sentenceCase //

  const handleSentenceCaseClick = () => {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      let newText = text
        .split(". ")
        .map(
          (word) => word[0].toUpperCase() + word.slice(1).toLowerCase() + "."
        )
        .join(" ");
      newText = newText.slice(0, newText.length - 1);
      setText(newText);
      setmessage("Converted To SentenceCase");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  };

  // to clear extra spaces //

  const handleExtraSpaces = () => {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      setmessage("Cleared Extra Spaces");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  };

  // to clear text //

  const clearText = () => {
    if (text.length) {
      let updated = undo;
      let elem = updated[updated.length - 1];
      if (elem !== text) {
        updated.push(text);
        setundo(updated);
      }
      setText("");
      setmessage("Text Cleared");
      setTimeout(toggleBar, 3000);
      settrigger(true);
    }
  };

  // to copy text //

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setmessage("Copied!");
    setTimeout(toggleBar, 3000);
    settrigger(true);
  };

  // to undo text //

  const undoText = () => {
    if (undo.length > 1) {
      let arr = undo;
      let updatedRedo = redo;
      updatedRedo.push(arr.pop());
      setredo(updatedRedo);
      let index = arr.length - 1;
      setText(arr[index]);
      setundo(arr);
    } else if (undo.length === 1) {
      let updatedRedo = redo;
      let elem = updatedRedo[updatedRedo.length - 1];
      if (elem !== text) {
        updatedRedo.push(text);
        setredo(updatedRedo);
      }
      setText(undo[0]);
    }
  };

  // to redo text //

  const redoText = () => {
    if (redo.length > 1) {
      let arr = redo;
      let updatedUndo = undo;
      updatedUndo.push(arr.pop());
      setundo(updatedUndo);
      let index = arr.length - 1;
      setText(arr[index]);
      setredo(arr);
    } else if (redo.length === 1) {
      let updatedUndo = undo;
      let elem = updatedUndo[updatedUndo.length - 1];
      if (elem !== text) {
        updatedUndo.push(text);
        setundo(updatedUndo);
      }
      setText(redo[0]);
    }
  };

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      setparalen(paralen + 1);
    }
  };

  return (
    <>
      {trigger && <Message message={message} />}
      <div className="flex flex-wrap py-10 px-4 lg:px-0 gap-x-10">
        <div className=" lg:pl-24 flex flex-col relative w-[100%]  md:px-0 lg:w-[70%]">
          <div className=" bg-[rgb(217,237,247)] ">
            <p className="text-[rgb(66,77,97)] font-[calibri] text-4xl font-bold py-3 px-3">
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words {text.length} Characters
            </p>
          </div>
          <div className="btn bg-[rgb(245,245,245)] flex-wrap flex py-1  border-1 border-[rgb(221,221,221)] rounded-md mt-2 px-2">
            <div
              className="flex  cursor-pointer items-center pt-2 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={changeToUppercase}
            >
              <img alt="" src={uppercaseImg} className="w-4"></img>
              <p className="text-[0.7rem]">UPPERCASE</p>
            </div>
            <div
              className="flex cursor-pointer pt-2  items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={changeToLowercase}
            >
              <img src={lowercaseImg} className="w-4" alt=""></img>
              <p className="text-[0.7rem]">LOWERCASE</p>
            </div>
            <div
              className="flex cursor-pointer  pt-2 items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={firLetterUp}
            >
              <img src={capitaliseImg} className="w-4" alt=""></img>
              <p className="text-[0.7rem]">CAPITALISE</p>
            </div>
            <div
              className="flex cursor-pointer  pt-2 items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={handleSentenceCaseClick}
            >
              <img src={justify} className="w-4" alt=""></img>
              <p className="text-[0.7rem]">SENTENCECASE</p>
            </div>
            <div
              className="flex items-center cursor-pointer py-1 px-1 pt-1 rounded-md  flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={handleExtraSpaces}
            >
              <i className="fa-solid text-sm fa-eraser"></i>
              <p className="text-[0.7rem] ">CLEAR EXTRA SPACES</p>
            </div>
            <div
              onClick={clearText}
              className="flex cursor-pointer pt-3 items-center py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
            >
              <i class="  fa-solid fa-trash-can"></i>
              <p className="text-[0.7rem]">CLEAR</p>
            </div>
            <div
              className="flex cursor-pointer  items-center pt-3 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
              onClick={copyText}
            >
              <i class="fa-solid fa-copy"></i>
              <p className="text-[0.7rem]">COPY</p>
            </div>
            <div
              onClick={undoText}
              className="flex cursor-pointer items-center pt-3 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
            >
              <i class="fa-solid fa-left-long"></i>
              <p className="text-[0.7rem]">UNDO</p>
            </div>
            <div
              onClick={redoText}
              className="flex cursor-pointer  items-center pt-3 py-1 px-1 rounded-md flex-col text-xs bg-[rgb(255,255,255)]  border-1 border-[rgb(204,204,204)]"
            >
              <i class="fa-solid fa-right-long"></i>
              <p className="text-[0.7rem]">REDO</p>
            </div>
          </div>
          <textarea
            id="text"
            onKeyDown={checkEnter}
            className="p-2 outline-blue-200 shadow-md border-1 border-[rgb(221,221,221)] text-sm "
            placeholder="Start typing, or copy and paste your document here..."
            rows="11"
            cols="100"
            value={text}
            onChange={valueChanged}
          ></textarea>
          <br />
          <div className=" -mt-5 rounded-md border-1 border-[rgb(221,221,221)] details bg-[rgb(245,245,245)]">
            <p className="text-[rgb(66,77,97)] font-[calibri] text-xl font-bold py-2 px-3">
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words {text.length} Characters
            </p>
          </div>
        </div>
        <div className="border-[rgb(221,221,221)] w-[100%] lg:ml-24 xl:ml-0  mt-12  lg:w-72 h-52  lg:mt-32  border-1 rounded-md">
          <p className="bg-[rgb(245,245,245)] px-2 py-2">Details</p>
          <div className="flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]">
            <p>Words</p>
            <p className="bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs">
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </p>
          </div>
          <div className="flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]">
            <p>Characters</p>
            <p className="bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs">
              {text.length}
            </p>
          </div>
          <div className="flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]">
            <p>Sentences</p>
            <p className="bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs">
              {
                text.split(".").filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </p>
          </div>
          <div className="flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]">
            <p>Reading Time</p>
            <p className="bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs">
              {text.length === 0
                ? 0
                : text.split(" ").length <= 6
                ? 1
                : parseInt(0.22 * text.split(" ").length)}
              sec
            </p>
          </div>
          <div className="flex justify-between px-2 py-1 border-b-1 border-[rgb(221,221,221)]">
            <p>Speaking Time</p>
            <p className="bg-[rgb(119,119,119)] rounded-xl h-5 px-2 mt-1  text-white text-xs">
              {text.length === 0
                ? 0
                : text.split(" ").length === 1
                ? 1
                : parseInt(0.35 * text.split(" ").length)}
              sec
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
