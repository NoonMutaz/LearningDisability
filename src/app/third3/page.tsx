 
 'use client';
 import './page.css'
 import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function T3(){



    const router = useRouter()

    function previous() {
        window.history.back()
    }

//     
////////////////////////////////////////////////////////////////
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(initialValue);
  
    useEffect(() => {
      const value = localStorage.getItem(key);
      if (value) {
        setStoredValue(JSON.parse(value));
      }
    }, []);
  
    const setValue = (value) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
  };
    const [result, setResult] = useLocalStorage('result', 0);
    const [clickeddd, setClickeddd] = useLocalStorage('clickeddd', false);
    const [clickeddd2, setClickeddd2] = useLocalStorage('clickeddd2', false);
    const [buttonColorrr, setButtonColorrr] = useLocalStorage('buttonColorrr', 'primary');
    const [buttonColorrr2, setButtonColorrr2] = useLocalStorage('buttonColorrr2', 'primary');
    const [buttonColorrr3, setButtonColorrr3] = useLocalStorage('buttonColorrr3', 'primary');
    const [buttonColorrr4, setButtonColorrr4] = useLocalStorage('buttonColorrr4', 'primary');
    const [playy] = useSound(' ./sound/correct.mp3');
    const [playy1] = useSound(' ./sound/wrong.mp3');
    const handelClickkk= () => {
      if (!clickeddd) {
        setClickeddd(true);
        setResult(result + 1);
        setButtonColorrr(buttonColorrr === 'primary' ? 'secondary' : 'primary');
        playy();
      }
    };
    
    const handelClickkk2 = () => {
      if (!clickeddd) {
        setClickeddd(true);
        setButtonColorrr2(buttonColorrr2 === 'primary' ? 'secondary' : 'primary');
    playy1();
      }
    };
  
  
  
    const handelClickkk3 = () => {
      if (!clickeddd) {
        setClickeddd(true);
        setButtonColorrr3(buttonColorrr3 === 'primary' ? 'secondary' : 'primary');
        playy1();
      }
    };
    const handelClickkk4 = () => {
      if (!clickeddd) {
        setClickeddd(true);
        setButtonColorrr4(buttonColorrr4 === 'primary' ? 'secondary' : 'primary');
        playy1();
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
    function Third3   (){
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

   <img   src='./images/melons.png'  width="600" height="200"    ></img>
</div><br></br> <br></br> <br></br>   <br></br> <br></br>  
<h3>  

قراءة وكتابة الاعداد ضمن العدد (20) (100)

         </h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClickkk4} style={{ backgroundColor: buttonColorrr4 === 'primary' ? 'black' : 'red' }}>14</button></h3>
  </div>
  <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClickkk} style={{ backgroundColor: buttonColorrr === 'primary' ? 'black' : 'green' }}>12</button></h3>
  </div>
  <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClickkk2} style={{ backgroundColor: buttonColorrr2 === 'primary' ? 'black' : 'red' }}>20</button></h3>
  </div>
  <div className="column"  >
  
<h3><button className='btn'  onClick={handelClickkk3} style={{ backgroundColor: buttonColorrr3 === 'primary' ? 'black' : 'red' }} >10</button></h3>
  </div>
</div>

<h3><button className='btn1' >  <a  href='./third4'>التالي</a></button></h3>
<h3><button className='btn2'  ><a  href='./third2'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return Third3()
 
}