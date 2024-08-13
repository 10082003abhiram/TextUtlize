import React, {useState} from 'react'

export default function Textform(props) {
    const [text, settext] = useState("");

    const  handleupclick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert(" Converted to uppercase ", " : Success");
    }

    const  handlelowclick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
       props.showAlert(" Converted to lowercase ", " : Success");
    }

    const handleonchange = (event)=>{
        settext(event.target.value);
    } 

    const handleremovespaceclick= ()=>{
        let newtext = text.split(/[   ]+/);
        settext(newtext.join(' '));
       props. showAlert("all the extra spaces are removed", " : Success");

    }

    const handlecopy = ()=> {
      var text =  document.getElementById("myBox");
      text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Reday to Paste ", " : Success");
    }

    const handleclear = ()=> {
        settext("")
        props.showAlert("is cleared!", " : Success");
    }
    
  
  return (
    <>
    <div className='cont1'  style ={{color : props.mode==="dark"? "white": "#042743"}}>   

            <h2 style={{fontFamily:'Cursive'}}>{props.heading}</h2>
            <div className="form-floating"  row = "10">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{
                backgroundColor : props.mode==="dark"? "black": "white", color: props.mode==="dark"? "white": "#042743", height:"225px",fontFamily:'Cursive'
            }} placeholder="Leave a comment here" id="myBox" rows="8"></textarea>
            <label htmlhtmlhtmlFor="mybox">TextAnalyzer....</label>
            </div>

            <button style={{height:"50px", fontFamily:'Cursive'}}  disabled={text.length===0}
            type="button" className='rounded' onClick={handleupclick}>
                convert to uppercase
            </button>

            <button   style={{height:"50px" , fontFamily:'Cursive'}}  disabled={text.length===0}type="button"  className='rounded my-4 mx-4' onClick={handlelowclick}>
                convert to lowercase
            </button>

            <button  style={{height:"50px", fontFamily:'Cursive'}}    disabled={text.length===0}type="button"  className='rounded my-4 mx-1.899' onClick={handleremovespaceclick}>
                Reamove Extra Space  
            </button>

            <button  style={{height:"50px", fontFamily:'Cursive'}}  disabled={text.length===0} type="button" className='rounded my-4 mx-4' onClick={handlecopy}>
               Copy to Clipboard
            </button>

            <button  style={{height:"50px", fontFamily:'Cursive'}}  disabled={text.length===0} type="button" className='rounded my-4 mx-2' onClick={handleclear}>
              Clear
            </button>

    </div>

    <div className="cont2" style ={{color : props.mode==="dark"? "white": "#042743"}}>
        <h4  style={{fontFamily:'Cursive'}}>Your text summary:- </h4>
        <span style={{fontFamily:'Cursive'}}>
            <strong>Word counter:    </strong>  {text.split(/\s+/).length-1}
                    
        </span>
        <br />
        <span>
        <strong  style={{fontFamily:'Cursive'}}>Character counter:   </strong> {text.length}
        </span>
        <br />
        <span>
           <strong  style={{fontFamily:'Cursive'}}>Avg Minutes To Read:   </strong>  {0.008*text.split(" ").length}
        </span>
    </div>

    </>
  )
}

