 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function F7(){



    const router = useRouter()

    function previous() {
        window.history.back()
    }
    const clearAll = () => {
      localStorage.clear();
      
    };
//     
////////////////////////////////////////////////////////////////
const useLocalStorage = (key:string, initialValue:any) => {
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
    const [clicked7, setClicked7] = useLocalStorage('clicked7', false);
    
    const [buttonColord, setButtonColord] = useLocalStorage('buttonColord', 'primary');
    const [buttonColor2d, setButtonColor2d] = useLocalStorage('buttonColor2d', 'primary');
    const [buttonColor3d, setButtonColor3d] = useLocalStorage('buttonColor3d', 'primary');
    const [buttonColor4d, setButtonColor4d] = useLocalStorage('buttonColor4d', 'primary');
    
    const [playd] = useSound(' ./sound/correct.mp3');
    const [play1d] = useSound(' ./sound/wrong.mp3');
    const handelClickd= () => {
      if (!clicked7) {
        setClicked7(true);
        setResult(result + 1);
        setButtonColord(buttonColord === 'primary' ? 'secondary' : 'primary');
        playd();
      }
    };
    
    const handelClick2d = () => {
      if (!clicked7) {
        setClicked7(true);
        setButtonColor2d(buttonColor2d === 'primary' ? 'secondary' : 'primary');
    play1d();
      }
    };
  
  
  
    const handelClick3d = () => {
      if (!clicked7) {
        setClicked7(true);
        setButtonColor3d(buttonColor3d === 'primary' ? 'secondary' : 'primary');
        play1d();
      }
    };
    const handelClick4d = () => {
      if (!clicked7) {
        setClicked7(true);
        setButtonColor4d(buttonColor4d === 'primary' ? 'secondary' : 'primary');
        play1d();
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
        window.location.href = './first1';
        // or
        window.location.reload();
      });
    }
    const handleRestart = () => {
        clearAll();
        localStorage.clear();
      // You can also add code to reset any other state variables or perform other actions
      window.dispatchEvent(new Event('clearAll'));
     
        window.location.href = './first1'; // or window.location.reload();
      };
    function First7   (){
        const handleRestart = () => {
            clearAll();
            // You can also add code to navigate to a specific page or perform other actions
            window.location.href = '/first1'; // or window.location.reload();
          };
    
    return(


<div  >
     
     
   <div className="container">
     <div className="topnav">
   <a href=' /home' onClick={handleRestart} >الجلسات</a> 
       {/* <a href="#news"> </a> */}
       {/* <a href="#contact">Contact</a> */}
    
       <a  href='/about' onClick={handleRestart}  >عن البرنامج</a> <br></br>
     </div>
   </div> 
 
  
 
   <br></br>  
<div   className='cont'>

 
   <img   src='./images/sock.png'  width="600" height="200"    ></img>
</div><br></br>
<h3>  صنف الاشكال حسب الشكل</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/gyo.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick4d} style={{ backgroundColor: buttonColor4d === 'primary' ? 'black' : 'red' }}>4</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/smallsock.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick2d} style={{ backgroundColor: buttonColor2d === 'primary' ? 'black' : 'red' }}>3</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/sock.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClickd} style={{ backgroundColor: buttonColord === 'primary' ? 'black' : 'green' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/gyosock.png'  width="600" height="200"    ></img>
<h3><button className='btn'  onClick={handelClick3d} style={{ backgroundColor: buttonColor3d === 'primary' ? 'black' : 'red' }} >1</button></h3>
  </div>
</div>
 
<h3><button className='btn2' ><a  href='./first6'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>

<h3><button className='b1' onClick={handleRestart} >   اعادة المحاولة</button></h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return First7()
 
}