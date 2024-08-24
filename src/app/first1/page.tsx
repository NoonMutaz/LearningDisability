/* eslint-disable react-hooks/rules-of-hooks */
 'use client';
import { useRouter } from 'next/navigation';
import './page.css';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import React from 'react';
// import { clearAll } from '../counter/page';
// import First2  from '../first1/page';
//  import { useState } from 'react';
 

export default function F1(){
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
const clearAll = () => {
  localStorage.clear();
  
};
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
 function First1(){
 
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
 
  
 
   <br></br>  
<div   className='cont'>

   <img   src='./images/fruit.png'  width="600" height="200"    ></img>
</div><br></br>
<h3> التصنيف حسب اللون 
صنف الاشكال التالية حسب لونها</h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/blueapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btnw'   onClick={handelClick4} style={{ backgroundColor: buttonColor4 === 'primary' ? 'black' : 'red' }} >4</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/greenapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btnw'   onClick={handelClick2} style={{ backgroundColor: buttonColor2 === 'primary' ? 'black' : 'red' }}>3</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/yellowapple.jpeg'  width="600" height="200"    ></img>
  <h3><button className='btnw'   onClick={handelClick} style={{ backgroundColor: buttonColor === 'primary' ? 'black' : 'green' }} >2</button></h3>
  
  </div>
  <div className="column"  >
  <img   src='./images/redapple.jpeg'  width="600" height="200"    ></img>
<h3><button className='btnw'   onClick={handelClick3} style={{ backgroundColor: buttonColor3 === 'primary' ? 'black' : 'red' }}>1</button></h3>
  </div>
</div>

<h3><button className='btn1'   > <a href='/first2'>التالي</a> </button></h3>
{/* <h3><button className='btn2'  onClick={handleRestart}>السابق  </button></h3> */}

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>








<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

    )
}


  function First2   (){

 
//       const [result, setResult] = useLocalStorage('result', 0);
//       const [clicked, setClicked] = useLocalStorage('clicked', false);
//       const [clicked2, setClicked2] = useLocalStorage('clicked2', false);
//       const [buttonColor, setButtonColor] = useLocalStorage('buttonColor', 'primary');
//       const [buttonColor2, setButtonColor2] = useLocalStorage('buttonColor2', 'primary');
    
//       const handelClick = () => {
//         if (!clicked) {
//           setClicked(true);
//           setResult(result + 1);
//           setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
//           // perform the action here
//         }
//       };
    
//       const handelClick2 = () => {
//         if (!clicked2) {
//           setClicked2(true);
//           setButtonColor2(buttonColor2 === 'primary' ? 'secondary' : 'primary');
//           // perform the action here
//         }
//       };
    
// //   const[result,setResult]=useState(0);
// //   const [clicked, setClicked] = useState(false);
// //   const [clicked2, setClicked2] = useState(false);
// //   const [buttonColor, setButtonColor] = useState('primary');
// //   const [buttonColor2, setButtonColor2] = useState('primary');
// //   const [buttonColor3, setButtonColor3] = useState('primary');
// //   const [buttonColor4, setButtonColor4] = useState('primary');

// // const resultt=result;


//   // const handelClick = ()=>{
//   //     if (!clicked) {
//   //         setClicked(true);
//   //           setResult(result+1);
//   //           setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
         
//   //         // perform the action here
//   //       }
//   //      };

  
  return(


<div  >
   
   
 <div className="container">
   <div className="topnav">
 <a href=' /home'  >الجلسات</a> 
     {/* <a href="#news"> </a> */}
     {/* <a href="#contact">Contact</a> */}
  
     <a  href='/about'  >عن البرنامج</a> <br></br>
   </div>
 </div> 



 <br></br>  
<div   className='cont'>

 <img   src='./images/red.png'  width="600" height="200"    ></img>
</div><br></br>
<h3> التصنيف حسب اللون 
صنف الاشكال التالية حسب لونها</h3>
<br></br> <br></br>  
<div className="row">
<div className="column"  >
<img   src='./images/banana.jpeg'  width="600" height="200"    ></img>
<h3><button className='btnr1'   onClick={handelClick4} style={{ backgroundColor: buttonColor4 === 'primary' ? 'black' : 'red' }} >4</button></h3>
</div>
<div className="column"  >
<img   src='./images/fish.jpeg'  width="600" height="200"    ></img>
<h3><button className='btnr2'  onClick={handelClick3} style={{ backgroundColor: buttonColor3 === 'primary' ? 'black' : 'red' }} >3</button></h3>
</div>
<div className="column"  >
<img   src='./images/yellowapple.jpeg'  width="600" height="200"    ></img>
<h3><button className='btn'   onClick={handelClick2} style={{ backgroundColor: buttonColor3 === 'primary' ? 'black' : 'green' }} >2</button></h3>
</div>
<div className="column"  >
<img   src='./images/redapple.jpeg'  width="600" height="200"    ></img>
<h3><button className='btn'  onClick={handelClick} style={{ backgroundColor: buttonColor === 'primary' ? 'black' : 'red' }} >1</button></h3>
</div><h5>2</h5>
</div>

<h3><button className='btn1'><a href='/first2'>التالي</a>  </button></h3>
<h3><button className='btn2'   onClick={previous} >السابق </button></h3>

<br></br><br></br><br></br>
<h3>{result}: النتيجة</h3>













<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

  )
}
return First1()
 

}