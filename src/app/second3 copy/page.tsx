 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function S3(){

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
    const clearAll = () => {
      localStorage.clear();
      
    };
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
        playa();
      }
    };
    
    const handelClick2a = () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setButtonColor2a(buttonColor2a === 'primary' ? 'secondary' : 'primary');
    play1a();
      }
    };
  
  
  
    const handelClick3a = () => {
      if (!clickeddd4) {
        setClickeddd4(true);
        setButtonColor3a(buttonColora === 'primary' ? 'secondary' : 'primary');
        play1a();
      }
    };
    const handelClick4a = () => {
      if (!click4) {
        setClick4(true);
        setButtonColor4a(buttonColor4a === 'primary' ? 'secondary' : 'primary');
        setResult(result + 1);
        playa();
      }
    };
  
     
    
  
    if (typeof document !== 'undefined') {
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
    }}
    const handleRestart = () => {
        clearAll();
        localStorage.clear();
      // You can also add code to reset any other state variables or perform other actions
      window.dispatchEvent(new Event('clearAll'));
     
        window.location.href = './first'; // or window.location.reload();
      };
    function Second3   (){
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
 
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/design24.png'  width="600" height="200"    ></img>
</div><br></br>
<h3> التصنيف حسب اللون 
صنف الاشكال التالية حسب لونها</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"    ></img>
  {/* <h3><button className='btn'  onClick={handelClick4a} style={{ backgroundColor: buttonColor4a === 'primary' ? 'black' : 'green' }}>4</button></h3> */}
  </div>
  <div className="column"  >
  <img   src='./images/design25.png'  width="600" height="200"    className='img1' ></img>
  <h3><button className='btn'  onClick={handelClicka} style={{ backgroundColor: buttonColora === 'primary' ? 'black' : 'green' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/design26.png'  width="600" height="200"    className='img1' ></img>
  <h3><button className='btn'  onClick={handelClick2a} style={{ backgroundColor: buttonColor2a === 'primary' ? 'black' : 'red' }}>1</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"    ></img>
{/* <h3><button className='btn'  onClick={handelClick3a} style={{ backgroundColor: buttonColor3a === 'primary' ? 'black' : 'red' }} >1</button></h3> */}
  </div>
</div>

<h3><a  href='./second4'><button className='btn1' >  التالي </button> </a></h3>
<h3><a  href='./second2'><button className='btn2'  >السابق</button></a></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return Second3()
 
}