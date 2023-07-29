
import React, { useState } from 'react'    //rfc
//usestate hook hepls us to create a state variable

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [text, setText] = useState("Enter your Text 2");  //whenever state is updated it get updated everywhere wehere i used 
  // text="It cannot update text like this rather we have to use function 'setText'";  //throws err
  //setText is a function used to update the text state 
  //we may can create can create many state as we can

  const upperClick = () => {
    // console.log("Clicked" + text)
    // console.log(event)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  const lowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase","success")
    
  }

  const clearClick = () => {
    setText(" ");
    props.showAlert("Text Clear","success")

  }

  const copyClick=()=>{
    let text=document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard","success")

  }

  const handleOnchange = (event) => {    //whenever we run any event in JS we get and event object as well
    // console.log("onchange is working properly") 
    setText(event.target.value);
  }



  return (

    <>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

        <h1> {props.heading} </h1>
        <div className="mb-3">

          <textarea className="form-control" onChange={handleOnchange} value={text} id="mybox" rows="7" style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'
            , color: props.mode === 'dark' ? 'white' : '#042743'
          }}
          ></textarea>
        </div>

        <button type="button" disabled={text.length===0} onClick={upperClick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
        <button type="button" disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={lowerClick}>Convert to lowerCase</button>
        <button type="button" disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={copyClick}>Copy Text</button>
        <button type="button" disabled={text.length===0}  className="btn btn-outline-primary mx-1 my-1" onClick={clearClick}>Clear Text</button>
        
      </div>

      <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}} >
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element=>{return element.length!==0})).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>


      </div>
    </>



  )
}
