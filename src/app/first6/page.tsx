 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function F6(){

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
    const [clicked6, setClicked6] = useLocalStorage('clicked6', false);
    
    const [buttonColorc, setButtonColorc] = useLocalStorage('buttonColorc', 'primary');
    const [buttonColor2c, setButtonColor2c] = useLocalStorage('buttonColor2c', 'primary');
    const [buttonColor3c, setButtonColor3c] = useLocalStorage('buttonColor3c', 'primary');
    const [buttonColor4c, setButtonColor4c] = useLocalStorage('buttonColor4c', 'primary');
    
    const [playc] = useSound(' ./sound/correct.mp3');
    const [play1c] = useSound(' ./sound/wrong.mp3');
    const handelClickc= () => {
      if (!clicked6) {
        setClicked6(true);
        setResult(result + 1);
        setButtonColorc(buttonColorc === 'primary' ? 'secondary' : 'primary');
        playc();
      }
    };
    
    const handelClick2c = () => {
      if (!clicked6) {
        setClicked6(true);
        setButtonColor2c(buttonColor2c === 'primary' ? 'secondary' : 'primary');
    play1c();
      }
    };
  
  
  
    const handelClick3c = () => {
      if (!clicked6) {
        setClicked6(true);
        setButtonColor3c(buttonColor3c === 'primary' ? 'secondary' : 'primary');
        play1c();
      }
    };
    const handelClick4c = () => {
      if (!clicked6) {
        setClicked6(true);
        setButtonColor4c(buttonColor4c === 'primary' ? 'secondary' : 'primary');
        play1c();
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
    function First6   (){
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
    
       <a  href='/about' onClick={handleRestart} >عن البرنامج</a> <br></br>
     </div>
   </div> 
 
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/fruit.png'  width="600" height="200"    ></img>
</div><br></br>
<h3>  اي من الاشياء التالية لديها الصفة نفسها</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/redapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick4c} style={{ backgroundColor: buttonColor4c === 'primary' ? 'black' : 'red' }}>4</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/yellowapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClickc} style={{ backgroundColor: buttonColorc === 'primary' ? 'black' : 'green' }}>3</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/greenapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btn'  onClick={handelClick2c} style={{ backgroundColor: buttonColor2c === 'primary' ? 'black' : 'red' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/blueapple.jpeg'  width="600" height="200"    ></img>
<h3><button className='btn'  onClick={handelClick3c} style={{ backgroundColor: buttonColor3c === 'primary' ? 'black' : 'red' }} >1</button></h3>
  </div>
</div>

<h3><button className='btn1' > <a  href='./first7'> التالي</a></button></h3>
<h3><button className='btn2' ><a  href='./first5'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return First6()
 
}