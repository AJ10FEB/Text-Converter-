import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
import Testforms from './component/Testforms';
import React, {useState} from 'react';



function App() {
  const [alert, setalert] = useState(null)
  
  const showalert =(message, type)=>{
    setalert({
      msg:message,
      
      type:type
    })
    setTimeout(() => {
      showalert(null) 
    }, 2000);
  }

  return (
    <>
      
        <strong>
          <Navbar title="Text Converter" />
        </strong>
        <Alert alert={alert} />
        <textform heading="Enter the text to analyze"/>
        <div className="container my-3 ">
         
          <Testforms showalert={showalert} heading="Enter the Text below" />
          {/* <About/>  */}
        </div>
    
    </>
  );
}

export default App;
