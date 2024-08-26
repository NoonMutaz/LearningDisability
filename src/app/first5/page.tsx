 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function F5(){


  
  const useLocalStorage = (key:string, initialValue:any) => {
    const [storedValue, setStoredValue] = useState(initialValue);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const value = localStorage.getItem(key);
        if (value) {
          setStoredValue(JSON.parse(value));
        }
      }
    }, [key]);
    const setValue = (value:any) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
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


    const router = useRouter()

    function previous() {
        window.history.back()
    }

//     
////////////////////////////////////////////////////////////////
// const useLocalStorage = (key:string, initialValue:any) => {
//     const [storedValue, setStoredValue] = useState(initialValue);
  
//     useEffect(() => {
//       const value = localStorage.getItem(key);
//       if (value) {
//         setStoredValue(JSON.parse(value));
//       }
//     }, []);
  
//     const setValue = (value:any) => {
//       setStoredValue(value);
//       localStorage.setItem(key, JSON.stringify(value));
//     };
  
//     return [storedValue, setValue];
//   };
    const [result, setResult] = useLocalStorage('result', 0);
    const [clicked5, setClicked5] = useLocalStorage('clicked5', false);
    
    const [buttonColorb, setButtonColorb] = useLocalStorage('buttonColorb', 'primary');
    const [buttonColor2b, setButtonColor2b] = useLocalStorage('buttonColor2b', 'primary');
    const [buttonColor3b, setButtonColor3b] = useLocalStorage('buttonColor3b', 'primary');
    const [buttonColor4b, setButtonColor4b] = useLocalStorage('buttonColor4b', 'primary');
    const [playa] = useSound(' ./sound/correct.mp3');
    const [play1a] = useSound(' ./sound/wrong.mp3');
    const [playb] = useSound(' ./sound/correct.mp3');
    const [play1b] = useSound(' ./sound/wrong.mp3');
    const handelClickb= () => {
      if (!clicked5) {
        setClicked5(true);
        setResult(result + 1);
        setButtonColorb(buttonColorb === 'primary' ? 'secondary' : 'primary');
        playb();
      }
    };
    
    const handelClick2b = () => {
      if (!clicked5) {
        setClicked5(true);
        setButtonColor2b(buttonColor2b === 'primary' ? 'secondary' : 'primary');
    play1b();
      }
    };
  
  
    const clearAll = () => {
      localStorage.clear();
      
    };
    const handelClick3b = () => {
      if (!clicked5) {
        setClicked5(true);
        setButtonColor3b(buttonColorb === 'primary' ? 'secondary' : 'primary');
        play1a();
      }
    };
    const handelClick4b = () => {
      if (!clicked5) {
        setClicked5(true);
        setButtonColor4b(buttonColor4b === 'primary' ? 'secondary' : 'primary');
        play1a();
      }
    };
  
    
    
  
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
    function First5   (){
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
    
       <a  href='/about' onClick={handleRestart} >عن البرنامج</a> <br></br>
     </div>
   </div> 
 
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/redSqu.png'  width="600" height="200"    ></img>
</div><br></br>
<h3> التصنيف حسب اللون 
صنف الاشكال التالية حسب لونها</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/square.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick4b} style={{ backgroundColor: buttonColor4b === 'primary' ? 'black' : 'red' }}>4</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/circle3.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick3b} style={{ backgroundColor: buttonColor3b === 'primary' ? 'black' : 'red' }}>3</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/triangle.png'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick2b} style={{ backgroundColor: buttonColor2b === 'primary' ? 'black' : 'red' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/redSqu.png'  width="600" height="200"    ></img>
<h3><button className='btn'  onClick={handelClickb} style={{ backgroundColor: buttonColorb === 'primary' ? 'black' : 'green' }} >1</button></h3>
  </div>
</div>

<h3><button className='btn1' > <a  href='./first6'>التالي </a></button></h3>
<h3><button className='btn2' ><a  href='./first4'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return First5()
 
}