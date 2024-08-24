 
 'use client';
 import './page.css'
 import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function S2(){



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
    const [clickedd, setClickedd] = useLocalStorage('clickedd', false);
    // const [clickedd2, setClickedd2] = useLocalStorage('clickedd2', false);
    const [buttonColorr, setButtonColorr] = useLocalStorage('buttonColorr', 'primary');
    const [buttonColorr2, setButtonColorr2] = useLocalStorage('buttonColorr2', 'primary');
    const [buttonColorr3, setButtonColorr3] = useLocalStorage('buttonColorr3', 'primary');
    const [buttonColorr4, setButtonColorr4] = useLocalStorage('buttonColorr4', 'primary');
    const [play1] = useSound(' ./sound/correct.mp3');
    const [play2] = useSound(' ./sound/wrong.mp3');
    const handelClickk= () => {
      if (!clickedd) {
        setClickedd(true);
        setResult(result + 1);
        setButtonColorr(buttonColorr === 'primary' ? 'secondary' : 'primary');
        play1();
      }
    };
    
    const handelClickk2 = () => {
      if (!clickedd) {
        setClickedd(true);
        setButtonColorr2(buttonColorr2 === 'primary' ? 'secondary' : 'primary');
    play2();
      }
    };
  
  
  
    const handelClickk3 = () => {
      if (!clickedd) {
        setClickedd(true);
        setButtonColorr3(buttonColorr3 === 'primary' ? 'secondary' : 'primary');
        play2();
      }
    };
    const handelClickk4 = () => {
      if (!clickedd) {
        setClickedd(true);
        setButtonColorr4(buttonColorr4 === 'primary' ? 'secondary' : 'primary');
        play2();
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
    function Second2   (){
        const handleRestart = () => {
            clearAll();
            // You can also add code to navigate to a specific page or perform other actions
            window.location.href = '/'; // or window.location.reload();
          };
    
    return(


<div  >
     
     
   <div className="container">
     <div className="topnav">
   <a href=' /home'  onClick={handleRestart}>الجلسات</a> 
       {/* <a href="#news"> </a> */}
       {/* <a href="#contact">Contact</a> */}
    
       <a  href='/about'  onClick={handleRestart}>عن البرنامج</a> <br></br>
     </div>
   </div> 
 
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/design17.png'  width="600" height="200"    className='img1'  ></img>
</div><br></br>
<h3>  
تحديد انماط الاشياء   وتوسيعها وانشاؤها</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"  ></img>
  {/* <h3><button className='btn'  onClick={handelClickk4} style={{ backgroundColor: buttonColorr4 === 'primary' ? 'black' : 'red' }}>4</button></h3> */}
  </div>
  <div className="column"  >
  <img   src='./images/design19.png'  width="600" height="200"    className='img1'  ></img>
  <h3><button className='btn'  onClick={handelClickk3} style={{ backgroundColor: buttonColorr3 === 'primary' ? 'black' : 'red' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/design20.png'  width="600" height="200"    className='img1'  ></img>
  <h3><button className='btn'  onClick={handelClickk} style={{ backgroundColor: buttonColorr === 'primary' ? 'black' : 'green' }}>1</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"    ></img>
{/* <h3><button className='btn'  onClick={handelClickk}  style={{ backgroundColor: buttonColorr === 'primary' ? 'black' : 'green' }} >1</button></h3> */}
  </div>
</div>

<h3><button className='btn1'> <a  href='./second2'>
التالي</a></button></h3>
{/* <h3><button className='btn2'  onClick={handleRestart} ><a  href='./second'>السابق</a></button></h3> */}

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return Second2()
 
}