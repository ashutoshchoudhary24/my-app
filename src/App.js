import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
    
    {/* <Navbar title="MoBlogs" abouttext="About Me"/> */}
{/* <Navbar /> */}
<Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />
 {/* here abouttext value is not defined so it will take the value defined under default props */}
{/* <Alert>This is a alert</Alert> */}
<Alert alert={alert}/> 
<div className='container'>
{/* <Routes> */}
  {/* React does partial matching hence using "exact" is a good practice
  /users--> component1
  /users/home-->component2 */}
  {/* div can't be isnide routes so moved outside   */}
 {/* <Route exat path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}/>}></Route>
 <Route exact path="/about" element={<About />} /> */}
  {/* <TextForm/> */}
  <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}> </TextForm>
  {/* <About/> */}
  

 
  </div>

    </> 
  );
}

export default App;