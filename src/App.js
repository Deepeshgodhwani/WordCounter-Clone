import React ,{ useState }from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/textarea';


function App() {
    const [mode, setmode] = useState('light')
   
    const changeMode = ()=>{
       
        if(mode==='light'){
            
            document.body.style.background='black'
            setmode('dark')
            showAlert("Enabled dark mode","success")
        }else{

          document.body.style.background='white'
          setmode('light')
          showAlert("Enabled light mode","success")
        }
    }

    const [alert, setalert] = useState(null)

    const showAlert= (message,type) =>{
           
            setalert({
              mssge:message,
              type:type
            })

            setTimeout(() => {
                setalert(null)
            }, 1500);
    }

  return ( 
    
    <Router>
       <Navbar title="TextUtils"   mode={changeMode}/>
       <Alert alert={alert}/> 
       <div className='container  my-3'>
       <Routes>
          <Route exact path="/" element={<Textarea mode={mode} alert={alert} showAlert={showAlert}/>}/>  
       </Routes>
      </div> 
    </Router>
    
  
  );
}



export default App;
