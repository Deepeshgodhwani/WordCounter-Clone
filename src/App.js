import React ,{ useState }from 'react'



import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/textarea';


function App() {
   
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
    
   <>
       <Navbar title="TextUtils"/>
       <Alert alert={alert}/> 
       <div className='container my-3'>
          <Textarea  alert={alert} showAlert={showAlert}/>  
      </div> 
    </>
  );
}



export default App;
