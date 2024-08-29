'use client';
 

 import { useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
 
import './page.css';
// import about from './About'

// import About from './About';



 

export default function App  () {

  const [userInput, setUserInput] = useState(''); 
  const [userInput2, setUserInput2] = useState('');
  const [userInput3, setUserInput3] = useState('');  
  const [userInput4, setUserInput4] = useState('');  
  const [userInput5, setUserInput5] = useState(''); 
  const [userInput6, setUserInput6] = useState('');  
  const [userInput7, setUserInput7] = useState(''); 
  const [userInput8, setUserInput8] = useState(''); 
  const [userInput9, setUserInput9] = useState('');
  const [userInput10, setUserInput10] = useState('');  
  const [userInput11, setUserInput11] = useState('');  
  const [userInput12, setUserInput12] = useState(''); 
  const [userInput13, setUserInput13] = useState('');  
  const [userInput14, setUserInput14] = useState(''); 
  const [userInput15, setUserInput15] = useState('');  
  const [userInput16, setUserInput16] = useState('');  
  const [userInput17, setUserInput17] = useState(''); 
  const [userInput18, setUserInput18] = useState('');  
  const [userInput19, setUserInput19] = useState(''); 
  const [userInput20, setUserInput20] = useState('');  
  const [userInput21, setUserInput21] = useState(''); 
  // user's input
  const [correctAnswer, setCorrectAnswer] = useState(2024); 
  const [correctAnswer2, setCorrectAnswer2] = useState(2024); // correct answer
  const [isCorrect, setIsCorrect] = useState(false); // whether the user's input is correct

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
  };



  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const userInputValue = parseInt(userInput, 10);
    if (userInputValue === correctAnswer) {
      setIsCorrect(true);
      window.location.href = "./first";
      // do something when the user's input is correct
      // console.log(' Congratulations! You guessed it!');
    } else {
      setIsCorrect(false);
    }
  };

// //
  const handleInputChange2 = (event: { target: { value: any; }; }) => {
    const userInputValue2 = event.target.value;
    setUserInput2(userInputValue2);
  };
  const handleSubmit2 = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const userInputValue2 = parseInt(userInput2, 10);
    if (userInputValue2 === correctAnswer) {
      setIsCorrect(true);
      window.location.href = "./second";
      // do something when the user's input is correct
      // console.log(' Congratulations! You guessed it!');
    } else {
      setIsCorrect(false);
    }
  };
////////////////////////////////////////////////////////////////3
const handleInputChange3 = (event: { target: { value: any; }; }) => {
  const userInputValue3 = event.target.value;
  setUserInput3(userInputValue3);
};
const handleSubmit3 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue3 = parseInt(userInput3, 10);
  if (userInputValue3 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./third";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
/////////////////////////4
const handleInputChange4 = (event: { target: { value: any; }; }) => {
  const userInputValue4 = event.target.value;
  setUserInput4(userInputValue4);
};
const handleSubmit4 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue4 = parseInt(userInput4, 10);
  if (userInputValue4 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
///////////////////////////5
const handleInputChange5 = (event: { target: { value: any; }; }) => {
  const userInputValue5 = event.target.value;
  setUserInput5(userInputValue5);
};
const handleSubmit5 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue5 = parseInt(userInput5, 10);
  if (userInputValue5 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
///////////////////////////6
const handleInputChange6 = (event: { target: { value: any; }; }) => {
  const userInputValue6 = event.target.value;
  setUserInput6(userInputValue6);
};
const handleSubmit6 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue6 = parseInt(userInput6, 10);
  if (userInputValue6 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
///////////////////////7
const handleInputChange7 = (event: { target: { value: any; }; }) => {
  const userInputValue7 = event.target.value;
  setUserInput7(userInputValue7);
};
const handleSubmit7 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue7 = parseInt(userInput7, 10);
  if (userInputValue7 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
/////////////////////////////////8
const handleInputChange8 = (event: { target: { value: any; }; }) => {
  const userInputValue8 = event.target.value;
  setUserInput8(userInputValue8);
};
const handleSubmit8 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue8 = parseInt(userInput8, 10);
  if (userInputValue8 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////////9
const handleInputChange9 = (event: { target: { value: any; }; }) => {
  const userInputValue9 = event.target.value;
  setUserInput9(userInputValue9);
};
const handleSubmit9 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue9 = parseInt(userInput9, 10);
  if (userInputValue9 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
//////////////////////10
const handleInputChange10 = (event: { target: { value: any; }; }) => {
  const userInputValue10 = event.target.value;
  setUserInput10(userInputValue10);
};
const handleSubmit10 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue10 = parseInt(userInput10, 10);
  if (userInputValue10 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////11
const handleInputChange11 = (event: { target: { value: any; }; }) => {
  const userInputValue11 = event.target.value;
  setUserInput11(userInputValue11);
};
const handleSubmit11 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue11 = parseInt(userInput11, 10);
  if (userInputValue11 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
///////////////////////////12
const handleInputChange12 = (event: { target: { value: any; }; }) => {
  const userInputValue12 = event.target.value;
  setUserInput12(userInputValue12);
};
const handleSubmit12 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue12 = parseInt(userInput12, 10);
  if (userInputValue12 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////13
const handleInputChange13 = (event: { target: { value: any; }; }) => {
  const userInputValue13 = event.target.value;
  setUserInput13(userInputValue13);
};
const handleSubmit13 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue13 = parseInt(userInput13, 10);
  if (userInputValue13 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
///////////////////////////14
const handleInputChange14 = (event: { target: { value: any; }; }) => {
  const userInputValue14 = event.target.value;
  setUserInput14(userInputValue14);
};
const handleSubmit14 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue14 = parseInt(userInput14, 10);
  if (userInputValue14 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
//////////////////////15
const handleInputChange15 = (event: { target: { value: any; }; }) => {
  const userInputValue15 = event.target.value;
  setUserInput15(userInputValue15);
};
const handleSubmit15 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue15 = parseInt(userInput15, 10);
  if (userInputValue15 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
//////////////////////16
const handleInputChange16 = (event: { target: { value: any; }; }) => {
  const userInputValue16 = event.target.value;
  setUserInput16(userInputValue16);
};
const handleSubmit16 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue16 = parseInt(userInput16, 10);
  if (userInputValue16 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////////17
const handleInputChange17 = (event: { target: { value: any; }; }) => {
  const userInputValue17 = event.target.value;
  setUserInput17(userInputValue17);
};
const handleSubmit17 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue17 = parseInt(userInput15, 10);
  if (userInputValue17 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////////18
const handleInputChange18 = (event: { target: { value: any; }; }) => {
  const userInputValue18 = event.target.value;
  setUserInput18(userInputValue18);
};
const handleSubmit18 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue18 = parseInt(userInput18, 10);
  if (userInputValue18 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////////19
const handleInputChange19 = (event: { target: { value: any; }; }) => {
  const userInputValue19 = event.target.value;
  setUserInput19(userInputValue19);
};
const handleSubmit19 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue19 = parseInt(userInput19, 10);
  if (userInputValue19 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
////////////////////20
const handleInputChange20 = (event: { target: { value: any; }; }) => {
  const userInputValue20 = event.target.value;
  setUserInput20(userInputValue20);
};
const handleSubmit20 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue20 = parseInt(userInput20, 10);
  if (userInputValue20 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
 ////////////////////21
const handleInputChange21 = (event: { target: { value: any; }; }) => {
  const userInputValue21 = event.target.value;
  setUserInput21(userInputValue21);
};
const handleSubmit21 = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const userInputValue21 = parseInt(userInput21, 10);
  if (userInputValue21 === correctAnswer) {
    setIsCorrect(true);
    window.location.href = "./";
    // do something when the user's input is correct
    // console.log(' Congratulations! You guessed it!');
  } else {
    setIsCorrect(false);
  }
};
 

  
   return  (


<div>
     
   <div className="bg-img">
 <div className="container">
   <button className="topnav"  type="submit">
 <a href=' /home'  >الجلسات</a> 

     <a  href='/about'  >عن البرنامج</a>
   </button>
 </div>

<div>

 
 
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br> 
</div>


<div className="main">


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="row">
<br></br>
<br></br>
 <div className="column">
   <div className="content">
   {/* <a   href="/first"> */}
     <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"    /> 
     <h3>الجلسة الأولى</h3>
     <div>
      <form onSubmit={handleSubmit}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput} onChange={handleInputChange} />
        </label> 
        <button type="submit"   >Submit</button> 
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
   
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثانية</h3>
     <div>
      <form onSubmit={handleSubmit2}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput2} onChange={handleInputChange2} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
  
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثالثة</h3>
     <div>
      <form onSubmit={handleSubmit3}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput3} onChange={handleInputChange3} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
 
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الرابعة</h3>
     <div>
      <form onSubmit={handleSubmit4}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput4} onChange={handleInputChange4} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>


 <div className="column">
   <div className="content">
 
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الخامسة</h3>
     <div>
      <form onSubmit={handleSubmit5}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput5} onChange={handleInputChange5} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
 
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"/> 
     <h3>الجلسة السادسة</h3>
     <div>
      <form onSubmit={handleSubmit6}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput6} onChange={handleInputChange6} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
  
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"  />
     <h3>الجلسة السابعة</h3>
     <div>
      <form onSubmit={handleSubmit7}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput7} onChange={handleInputChange7} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
 
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثامنة</h3>
     <div>
      <form onSubmit={handleSubmit8}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput8} onChange={handleInputChange8} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 

 <div className="column">
   <div className="content">
  
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة التاسعة</h3>
     <div>
      <form onSubmit={handleSubmit9}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput9} onChange={handleInputChange9} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة العاشرة</h3>
     <div>
      <form onSubmit={handleSubmit10}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput10} onChange={handleInputChange10} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الحادية عشر</h3>
     <div>
      <form onSubmit={handleSubmit11}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput11} onChange={handleInputChange11} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>


 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثانية عشر</h3>
     <div>
      <form onSubmit={handleSubmit12}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput12} onChange={handleInputChange12} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>


 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثالثة عشر</h3>
     <div>
      <form onSubmit={handleSubmit13}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput13} onChange={handleInputChange13} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الرابعة عشر</h3>
     <div>
      <form onSubmit={handleSubmit14}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput14} onChange={handleInputChange14} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
  
   <img src=" https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الخامسة عشر</h3>
     <div>
      <form onSubmit={handleSubmit15}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput15} onChange={handleInputChange15} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
   
     <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"    /> 
     <h3>الجلسة السادسة عشر</h3>
     <div>
      <form onSubmit={handleSubmit16}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput16} onChange={handleInputChange16} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
  
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة السابعة عشر</h3>
     <div>
      <form onSubmit={handleSubmit17}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput17} onChange={handleInputChange17} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
    
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة الثامنة عشر</h3>
     <div>
      <form onSubmit={handleSubmit18}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput18} onChange={handleInputChange18} />
        </label>
        <button type="submit" >Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>
 <div className="column">
   <div className="content">
   
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة التاسعة عشر</h3>
     <div>
      <form onSubmit={handleSubmit19}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput19} onChange={handleInputChange19} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>


 <div className="column">
   <div className="content">
  
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"   /> 
     <h3>الجلسة العشرون</h3>
     <div>
      <form onSubmit={handleSubmit20}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput20} onChange={handleInputChange20} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 <div className="column">
   <div className="content">
   
   <img src="https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png"/> 
     <h3>الجلسة الواحدة والعشرون</h3>
     <div>
      <form onSubmit={handleSubmit21}>
        <label>
      : رمز الدخول
          <input type="text" value={userInput21} onChange={handleInputChange21} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isCorrect ? (
        <p> </p>
      ) : (
        <p> </p>
      )}
    </div>
     {/* <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p> */}
   </div>
 </div>

 </div>
 </div>


 

 </div>
</div>
) }

 