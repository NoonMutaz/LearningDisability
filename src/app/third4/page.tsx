 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function F4(){



    const router = useRouter()

    function previous() {
        window.history.back()
    }

//     
////////////////////////////////////////////////////////////////
const useLocalStorage = (key:any, initialValue:any) => {
    const [storedValue, setStoredValue] = useState(initialValue);
  
    useEffect(() => {
      const value = localStorage.getItem(key);
      if (value) {
        setStoredValue(JSON.parse(value));
      }
    }, []);
  
    const setValue = (value:any) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
  };
    const [result, setResult] = useLocalStorage('result', 0);
    const [clickeddd4, setClickeddd4] = useLocalStorage('clickeddd4', false);
    const [click4, setClick4] = useLocalStorage('clickeddd4', false);
    const [buttonColora, setButtonColora] = useLocalStorage('buttonColora', 'primary');
    const [buttonColor2a, setButtonColor2a] = useLocalStorage('buttonColor2a', 'primary');
    const [buttonColor3a, setButtonColor3a] = useLocalStorage('buttonColor3a', 'primary');
    const [buttonColor4a, setButtonColor4a] = useLocalStorage('buttonColor4a', 'primary');
    const [playa] = useSound(' ./sound/correct.mp3');
    const [play1a] = useSound(' ./sound/wrong.mp3');
    const handelClicka= () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setResult(result + 1);
        setButtonColora(buttonColora === 'primary' ? 'secondary' : 'primary');
        play1a();
      }
    };
    
    const handelClick2a = () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setButtonColor2a(buttonColor2a === 'primary' ? 'secondary' : 'primary');
    play1a();
      }
    };
  
    const clearAll = () => {
      localStorage.clear();
      
    };
  
  
    const handelClick3a = () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setButtonColor3a(buttonColora === 'primary' ? 'secondary' : 'primary');
        play1a();
      }
    };
    const handelClick4a = () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setButtonColor4a(buttonColor4a === 'primary' ? 'secondary' : 'primary');
        setResult(result + 1);
        playa();
      }
    };
  
    const [clearStorage, setClearStorage] = useState(false);
  
    const handleClearStorage = () => {
      localStorage.clear();
      setClearStorage(true);
    };
  
    useEffect(() => {
      if (clearStorage) {
        // Optional: You can also navigate to a specific page or perform some other action after clearing the local storage
        // router.push('/'); // Navigate to the homepage, for example
      }
    }, [clearStorage]);
  
    
  
    const button = document.getElementById('clear-button');
    if (button) {
      button.addEventListener('click', () => {
        localStorage.clear();
        // restart logic for all files
        // you can also redirect to the first page or reload the app
        window.location.href = './home';
        // or
        window.location.reload();
      });
    }
    const handleRestart = () => {
        clearAll();
        localStorage.clear();
      // You can also add code to reset any other state variables or perform other actions
      window.dispatchEvent(new Event('clearAll'));
     
        window.location.href = './first'; // or window.location.reload();
      };
    function First4   (){
        const handleRestart = () => {
            clearAll();
            // You can also add code to navigate to a specific page or perform other actions
            window.location.href = '/'; // or window.location.reload();
          };
    
    return(


<div  >
     
     
   <div className="container">
     <div className="topnav">
   <a href=' /home' onClick={handleRestart} >الجلسات</a> 
       {/* <a href="#news"> </a> */}
       {/* <a href="#contact">Contact</a> */}
    
       <a  href='/about'  onClick={handleRestart}>عن البرنامج</a> <br></br>
     </div>
   </div> 
   <h3 className="right-corner-text">{result}:النتيجة</h3>
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/penguins.png'  width="600" height="200"    ></img>
</div><br></br> <br></br> <br></br>  <br></br> <br></br> 
<h3>  
قراءة وكتابة الاعداد ضمن العدد (20) (100) </h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClick4a} style={{ backgroundColor: buttonColor4a === 'primary' ? 'black' : 'green' }}>20</button></h3>
  </div>
  <div className="column"  > 
  <h3><button className='btn'  onClick={handelClicka} style={{ backgroundColor: buttonColora === 'primary' ? 'black' : 'red' }}>23</button></h3>
  </div>
  <div className="column"  >
  
  <h3><button className='btn'  onClick={handelClick2a} style={{ backgroundColor: buttonColor2a === 'primary' ? 'black' : 'red' }}>15</button></h3>
  </div>
  <div className="column"  >
   
<h3><button className='btn'  onClick={handelClick3a} style={{ backgroundColor: buttonColor3a === 'primary' ? 'black' : 'red' }} >14</button></h3>
  </div>
  
</div>
 
<h3><button className='btn1' > <a  href='./third5'> التالي  </a></button></h3>
<h3><button className='btn2'  ><a  href='./third3'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return First4()
 
}