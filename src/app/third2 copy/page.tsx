 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function T2(){

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
   // or window.location.reload();
    };
    const [userInput2, setUserInput2] = useState(''); 
    const [correctAnswer2, setCorrectAnswer2] = useState(16); 
    const [isCorrect2, setIsCorrect2] = useState(false);
    const handleInputChange2 = (event: { target: { value: any; }; }) => {
      const userInputValue2 = event.target.value;
      setUserInput2(userInputValue2);
    };
  
  
  
    
    const handleSubmit2 = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      const userInputValue2 = parseInt(userInput2, 10);
      if (userInputValue2 === correctAnswer2) {
        setIsCorrect2(true);
        localStorage.setItem('userInput2', userInput2);
        localStorage.setItem('userInput2', userInput2);
        play1();
      } else {
        setIsCorrect2(false);
      }
    };
    
    
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
  
      // Check if the input is correct
      if (parseInt(userInput2) === correctAnswer2) {
        setIsCorrect2(true);
      } else {
        setIsCorrect2(false);
      }
  
      // Save to local storage
      localStorage.setItem('userInput2', userInput2);
      localStorage.setItem('correctAnswer2', correctAnswer2.toString());
      localStorage.setItem('isCorrect2', isCorrect2.toString());
    };
  
    const handleSubmitt2 = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
  
      // Check if the input is correct
      if (parseInt(userInput2) === correctAnswer2) {
        setIsCorrect2(true);
      } else {
        setIsCorrect2(false);
      }
  
      // Save to local storage
      localStorage.setItem('userInput2', userInput2);
      localStorage.setItem('correctAnswer2', correctAnswer2.toString());
      localStorage.setItem('isCorrect2', isCorrect2.toString());
    };
    useEffect(() => {
      const storedUserInput2 = localStorage.getItem('userInput2');
      const storedCorrectAnswer2 = localStorage.getItem('correctAnswer2');
      const storedIsCorrect2 = localStorage.getItem('isCorrect2');
  
      if (storedUserInput2) {
        setUserInput2(storedUserInput2);
      }
      if (storedCorrectAnswer2) {
        setCorrectAnswer2(parseInt(storedCorrectAnswer2));
      }
      if (storedIsCorrect2) {
        setIsCorrect2(storedIsCorrect2 === 'true');
      }
    }, []);



  
    function Third2   (){
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
   <h3 className="right-corner-text">{result}:النتيجة</h3>
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/ducks.png'  width="600" height="200"    ></img>
</div><br></br><br></br><br></br><br></br><br></br><br></br>
<h3> قراءة وكتابة الاعداد ضمن العدد (20) (100)
  </h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
   
  <h3><button className='btn'  onClick={handelClickk4} style={{ backgroundColor: buttonColorr4 === 'primary' ? 'black' : 'red' }}>14</button></h3>
  </div>
  <div className="column"  >
  
  <h3><button className='btn'  onClick={handelClickk3} style={{ backgroundColor: buttonColorr3 === 'primary' ? 'black' : 'red' }}>13</button></h3>
  </div>
  <div className="column"  >
   
  <h3><button className='btn'  onClick={handelClickk2} style={{ backgroundColor: buttonColorr2 === 'primary' ? 'black' : 'red' }}>12</button></h3>
  </div>
  <div className="column"  > 
<h3><button className='btn'  onClick={handelClickk}  style={{ backgroundColor: buttonColorr === 'primary' ? 'black' : 'green' }} >16</button></h3>
  </div>
</div>
<h3> <form onSubmit={handleSubmit}>
      <label>:اكتب الرقم</label><br></br>
      <input
        type="text"
        id="user-input"
        name="user-input"
        value={userInput2}
        onChange={handleInputChange2}
      />
      <button type="submit">Submit</button>
      {isCorrect2 ? (
        <p id="result2" style={{ color: 'green' }}>
          صحيح! الرقم هو {correctAnswer2}.
        </p>
      ) : (
        <p id="result2" style={{ color: 'red' }}>
         اكتب العدد
        </p>
      )}
    </form></h3>

<h3><a  href='./third3'><button className='btn1'> 
التالي</button></a></h3>
<h3><a  href='./third1'><button className='btn2'  >
                السابق</button></a></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return Third2()
 
}