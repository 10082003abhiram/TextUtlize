import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function App() {
  const [mode , setmode]=useState("light")
  const [alert, setAlert]= useState(null);

  const showAlert = (message , type)=>{
     setAlert({
    message: message,
    type: type
     })

     setTimeout(()=>{
      setAlert(null)
     },1700)
  }

   const togglemode = ()=> {
    if (mode==="light") {
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Drak Mode is Enabled", " : Success")
      document.title= "TextUlis - Dark Mode";
    }
   else{
    setmode("light")
    document.body.style.backgroundColor = "white"
    showAlert("light Mode is Enabled", " : Success")
    document.title= "TextUlis - Light Mode";
   }
   }
  return (
    <>
      <BrowserRouter>
      <Navbar tittle= "TextUtlis.." about="About" mode= {mode} togglemode= {togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
  
      <Route exact path="/" element={<Textform  showAlert={showAlert} heading = " Try TextUtlis- Converter, Counter, Copy, Clear" mode= {mode}/> } />
      <Route  exact path="/about" element={<About mode= {mode}/>} />
        
      </Routes>
      </div>
      </BrowserRouter>
     
    
    </>
  );

}
export default App;
