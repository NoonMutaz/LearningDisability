/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useRouter } from 'next/navigation';
import './page.css';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import React from 'react';
import { clearAll } from '../counter/page';
// import First2  from '../first1/page';
//  import { useState } from 'react';
 

export default function T1(){
  // const [result, setResult] = useLocalStorage('result', 0);
  // const [clicked, setClicked] = useLocalStorage('clicked', false);
  // const [clicked2, setClicked2] = useLocalStorage('clicked2', false);
  // const [buttonColor, setButtonColor] = useLocalStorage('buttonColor', 'primary');
  // const [buttonColor2, setButtonColor2] = useLocalStorage('buttonColor2', 'primary');
//  const handelClick = ()=>{

//   if (!clicked) {
//     setClicked(true);
//       setResult(result+1);
//       setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
   
//     // perform the action here
//   }
//  };
// const handelClick2 = ()=>{

//   if (!clicked) {
//     setClicked(true);
    
//       setButtonColor2(buttonColor2 === 'primary' ? 'secondary' : 'primary');
   
//     // perform the action here
//   }
//  };

function previous() {
  useEffect(() => {
    window.history.back();
  }, []);
}
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
  const [clicked, setClicked] = useLocalStorage('clicked', false);
  const [clicked2, setClicked2] = useLocalStorage('clicked2', false);
  const [buttonColor, setButtonColor] = useLocalStorage('buttonColor', 'primary');
  const [buttonColor2, setButtonColor2] = useLocalStorage('buttonColor2', 'primary');
  const [buttonColor3, setButtonColor3] = useLocalStorage('buttonColor3', 'primary');
  const [buttonColor4, setButtonColor4] = useLocalStorage('buttonColor4', 'primary');
  const [play] = useSound(' ./sound/correct.mp3');
  const [play11] = useSound(' ./sound/wrong.mp3');
  const handelClick = () => {
    if (!clicked) {
      setClicked(true);
      setResult(result + 1);
      setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
      play();
    }
  };
  
  const handelClick2 = () => {
    if (!clicked) {
      setClicked(true);
      setButtonColor2(buttonColor2 === 'primary' ? 'secondary' : 'primary');
  play11();
    }
  };



  const handelClick3 = () => {
    if (!clicked) {
      setClicked(true);
      setButtonColor3(buttonColor3 === 'primary' ? 'secondary' : 'primary');
      play11();
    }
  };
  const handelClick4 = () => {
    if (!clicked) {
      setClicked(true);
      setButtonColor4(buttonColor4 === 'primary' ? 'secondary' : 'primary');
      play11();
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
 function Third1(){
 
  // const [result, setResult] = useLocalStorage('result', 0);
  // const [clicked, setClicked] = useLocalStorage('clicked', false);
  // const [clicked2, setClicked2] = useLocalStorage('clicked2', false);
  // const [buttonColor, setButtonColor] = useLocalStorage('buttonColor', 'primary');
  // const [buttonColor2, setButtonColor2] = useLocalStorage('buttonColor2', 'primary');

  // const handelClick = () => {
  //   if (!clicked) {
  //     setClicked(true);
  //     setResult(result + 1);
  //     setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
  //     // perform the action here
  //   }
  // };

  // const handelClick2 = () => {
  //   if (!clicked2) {
  //     setClicked2(true);
  //     setButtonColor2(buttonColor2 === 'primary' ? 'secondary' : 'primary');
  //     // perform the action here
  //   }
  // };

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
 
   <h3 className="right-corner-text">{result}:النتيجة</h3>
 
   <br></br>  
<div   className='cont'>
<br></br> <br></br> 
   <img   src='./images/balls.png'  width="600" height="200"    ></img>
</div><br></br><br></br> <br></br> <br></br>  <br></br> <br></br>  <br></br> <br></br>  
<h3>       
قراءة وكتابة الاعداد ضمن العدد (20) (100)        </h3>
 <br></br> <br></br>  <br></br> <br></br> <br></br>  
<div className="row">
  <div className="column"  >
 
  <h3><button className='btnw'   onClick={handelClick4} style={{ backgroundColor: buttonColor4 === 'primary' ? 'black' : 'red' }} >14</button></h3>
  </div>
  <div className="column"  >
 
  <h3><button className='btnw'   onClick={handelClick2} style={{ backgroundColor: buttonColor2 === 'primary' ? 'black' : 'red' }}>30</button></h3>
  </div>
<div className="column"  >

<h3><button className='btnw'   onClick={handelClick} style={{ backgroundColor: buttonColor === 'primary' ? 'black' : 'green' }} >10</button></h3>

</div>
<div className="column"  >
<h3><button className='btnw'   onClick={handelClick3} style={{ backgroundColor: buttonColor3 === 'primary' ? 'black' : 'red' }}>1</button></h3>
</div>
</div>

<h3><button className='btn1'   > <a href='/third2'>التالي</a> </button></h3>
{/* <h3><a href='/third'><button className='btn2'  onClick={handleRestart}>السابق  </button></a></h3> */}
 <h3>{result}:النتيجة</h3>


<br></br> <br></br> <br></br>  



</div>

    )
}

 
return Third1()
 

}