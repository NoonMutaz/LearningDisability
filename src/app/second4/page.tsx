 
 'use client';
 import './page.css'
//  import { clearAll } from '../counter/page';
 import React, { useEffect } from 'react';

 import { useState } from 'react';
 
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
 
 
export default function S4(){

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
    const [clickeddd4aa, setClickeddd4aa] = useLocalStorage('clickeddd4aa', false);
    // const [click4, setClick4] = useLocalStorage('clickeddd4', false);
    const [buttonColoraa, setButtonColoraa] = useLocalStorage('buttonColoraa', 'primary');
    const [buttonColor2aa, setButtonColor2aa] = useLocalStorage('buttonColor2aa', 'primary');
    const [buttonColor3a, setButtonColor3a] = useLocalStorage('buttonColor3a', 'primary');
    const [buttonColor4a, setButtonColor4a] = useLocalStorage('buttonColor4a', 'primary');
    const [playa] = useSound(' ./sound/correct.mp3');
    const [play1a] = useSound(' ./sound/wrong.mp3');
    const handelClickaa= () => {
      if (!clickeddd4aa) {
        setClickeddd4aa(true);
        setResult(result + 1);
        setButtonColoraa(buttonColoraa === 'primary' ? 'secondary' : 'primary');
        playa();
      }
    };
    
    const handelClick2aa = () => {
      if (!clickeddd4aa) {
        setClickeddd4aa(true);
        setButtonColor2aa(buttonColor2aa === 'primary' ? 'secondary' : 'primary');
    play1a();
      }
    };
  
    const clearAll = () => {
      localStorage.clear();
      
    };
  
    // const handelClick3aa = () => {
    //   if (!clickeddd4a) {
    //     setClickeddd4a(true);
    //     setButtonColor3a(buttonColoraa === 'primary' ? 'secondary' : 'primary');
    //     play1a();
    //   }
    // };
    // const handelClick4aa = () => {
    //   if (!click4) {
    //     setClick4(true);
    //     setButtonColor4a(buttonColor4a === 'primary' ? 'secondary' : 'primary');
    //     setResult(result + 1);
    //     playa();
    //   }
    // };
  
    
  
    
  
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
    function Second4   (){
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

   <img   src='./images/fishh.png'  width="600" height="200"   className='img1' ></img>
</div><br></br>
<h3>    
تحديد انماط الاشياء   وتوسيعها وانشاؤها  </h3>
 <br></br> <br></br>  
<div className="row">
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"    ></img>
  {/* <h3><button className='btn'  onClick={handelClick4a} style={{ backgroundColor: buttonColor4a === 'primary' ? 'black' : 'green' }}>4</button></h3> */}
  </div>
  <div className="column"  >
  <img   src='./images/fish28.png'  width="600" height="200"   className='img1' ></img>
  <h3><button className='btn'  onClick={handelClickaa} style={{ backgroundColor: buttonColoraa === 'primary' ? 'black' : 'green' }}>2</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/fish29.png'  width="600" height="200"   className='img1' ></img>
  <h3><button className='btn'  onClick={handelClick2aa} style={{ backgroundColor: buttonColor2aa === 'primary' ? 'black' : 'red' }}>1</button></h3>
  </div>
  <div className="column"  >
  <img   src='./images/white.png'  width="600" height="200"    ></img>
{/* <h3><button className='btn'  onClick={handelClick3a} style={{ backgroundColor: buttonColor3a === 'primary' ? 'black' : 'red' }} >1</button></h3> */}
  </div>
</div>

<h3><button className='btn1' > <a  href='./second5'> التالي  </a></button></h3>
<h3><button className='btn2'  ><a  href='./second3'>السابق</a></button></h3>

<br></br><br></br><br></br>
<h3>{result}:النتيجة</h3>










<br></br> <br></br> <br></br> <br></br> <br></br>  <br></br>  







</div>

)
}
return Second4()
 
}