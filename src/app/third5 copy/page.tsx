 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
//  import React, { useEffect } from 'react';

//  import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
// import { NextPage } from 'next';
import { useState, useRef, useEffect } from 'react';
 
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
// const useLocalStorage = (key:any, initialValue:any) => {
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
     
        // window.location.href = './third0'; // or window.location.reload();
      };

      const handleRestart2 = () => {
        clearAll();
        localStorage.clear();
      // You can also add code to reset any other state variables or perform other actions
      window.dispatchEvent(new Event('clearAll'));
     
        window.location.href = './third6'; // or window.location.reload();
      };

      const handleRestart3 = () => {
        clearAll();
        localStorage.clear();
      // You can also add code to reset any other state variables or perform other actions
      window.dispatchEvent(new Event('clearAll'));
     
        window.location.href = './third0'; // or window.location.reload();
      };
      
      const [userInput5, setUserInput5] = useState(''); 
      const [correctAnswer5, setCorrectAnswer5] = useState(6); 
      const [isCorrect5, setIsCorrect5] = useState(false);
      const handleInputChange5 = (event: { target: { value: any; }; }) => {
        const userInputValue5 = event.target.value;
        setUserInput5(userInputValue5);
      };
    

      const handleSubmit5 = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const userInputValue5 = parseInt(userInput5, 10);
        if (userInputValue5 === correctAnswer5) {
          setIsCorrect5(true);
          localStorage.setItem('userInput5', userInput5);
          localStorage.setItem('userInput5', userInput5);
          if (!clicked5) {
            setClicked5(true);
            setResult(result + 1);
            setButtonColorb(buttonColorb === 'primary' ? 'secondary' : 'primary');
            playb();
          }
        } else {
          setIsCorrect5(false);
        }
      };
      useEffect(() => {
        const storedUserInput5 = localStorage.getItem('userInput5');
        const storedCorrectAnswer5 = localStorage.getItem('correctAnswer5');
        const storedIsCorrect5 = localStorage.getItem('isCorrect5');
    
        if (storedUserInput5) {
          setUserInput5(storedUserInput5);
        }
        if (storedCorrectAnswer5) {
          setCorrectAnswer5(parseInt(storedCorrectAnswer5));
        }
        if (storedIsCorrect5) {
          setIsCorrect5(storedIsCorrect5 === 'true');
        }
      }, []);

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
 
  
   <h3 className="right-corner-text">{result}:النتيجة</h3>
   <br></br>  
<div   className='cont'>

   <video    controls   >  <source src="./images/vid.mp4" type="video/mp4" /></video>
   <br></br> <br></br>  <br></br> <br></br>  <br></br> 
</div><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
<h3>  على الطالبة كتابة الارقام التالية:</h3>
 <br></br> <br></br>  
<div className="row">
  {/* <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClick4b} style={{ backgroundColor: buttonColor4b === 'primary' ? 'black' : 'red' }}>4</button></h3>
  </div> */}
  {/* <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClick3b} style={{ backgroundColor: buttonColor3b === 'primary' ? 'black' : 'red' }}>3</button></h3>
  </div>
  <div className="column"  >
 
  <h3><button className='btn'  onClick={handelClick2b} style={{ backgroundColor: buttonColor2b === 'primary' ? 'black' : 'red' }}>2</button></h3>
  </div>
  <div className="column"  >
 
<h3><button className='btn'  onClick={handelClickb} style={{ backgroundColor: buttonColorb === 'primary' ? 'black' : 'green' }} >1</button></h3>
  </div> */}
<h3>
<form onSubmit={handleSubmit5}>
      <label></label><br></br>
      <input
        type="text"
        id="user-input5"
        name="user-input5"
        value={userInput5}
        onChange={handleInputChange5}
      />
      <button type="submit">Submit</button>
      {isCorrect5 ? (
        <p id="result3" style={{ color: 'green' }}>
          صحيح! الرقم هو {correctAnswer5}.
        </p>
      ) : (
        <p id="result" style={{ color: 'red' }}>
         اكتب العدد
        </p>
      )}
    </form></h3>

</div>
{/* 
<h3><a  href='./third6'><button className='btn1' >التالي </button></a></h3> */}
<h3><a  href='./third4'><button className='btn2' >السابق</button></a></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>
<h3><button className='b1' onClick={handleRestart3} >   اعادة المحاولة</button></h3>
<br></br>

<h3><button className='b2'  >   تقييم الهدف</button></h3>









<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return First5()
 
}