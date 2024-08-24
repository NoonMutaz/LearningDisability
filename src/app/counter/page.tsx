// import { useState, useEffect } from "react";

// export default function Counter    (){
//     const [result, setResult] = useState(0);
//     const [clicked, setClicked] = useState(false);
//     const [clicked2, setClicked2] = useState(false);
//     const [buttonColor, setButtonColor] = useState('primary');
//     const [buttonColor2, setButtonColor2] = useState('primary');
//     const [buttonColor3, setButtonColor3] = useState('primary');
//     const [buttonColor4, setButtonColor4] = useState('primary');
  
//     useEffect(() => {
//       const storedResult = localStorage.getItem('result');
//       const storedClicked = localStorage.getItem('clicked');
//       const storedButtonColor = localStorage.getItem('buttonColor');
//       const storedButtonColor2 = localStorage.getItem('buttonColor2');
//       const storedButtonColor3 = localStorage.getItem('buttonColor3');
//       const storedButtonColor4 = localStorage.getItem('buttonColor4');
  
//       if (storedResult) {
//         setResult(parseInt(storedResult, 10));
//       }
//       if (storedClicked) {
//         setClicked(JSON.parse(storedClicked));
//       }
//       if (storedButtonColor) {
//         setButtonColor(storedButtonColor);
//       }
//       if (storedButtonColor2) {
//         setButtonColor2(storedButtonColor2);
//       }
//       if (storedButtonColor3) {
//         setButtonColor3(storedButtonColor3);
//       }
//       if (storedButtonColor4) {
//         setButtonColor4(storedButtonColor4);
//       }
//     }, []);
  
//     // useEffect(() => {
//     //   localStorage.setItem('result', result);
//     //   localStorage.setItem('clicked', JSON.stringify(clicked));
//     //   localStorage.setItem('buttonColor', buttonColor);
//     //   localStorage.setItem('buttonColor2', buttonColor2);
//     //   localStorage.setItem('buttonColor3', buttonColor3);
//     //   localStorage.setItem('buttonColor4', buttonColor4);
//     // }, [result, clicked, buttonColor, buttonColor2, buttonColor3, buttonColor4]);
  
//     const handelClick = () => {
//       if (!clicked) {
//         setClicked(true);
//         setResult(result + 1);
//         setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
//         // perform the action here
//       }
//     };
  
// return(
// <div></div>

// )

// }

// export const clearAll = () => {
//     localStorage.clear();
    
//   };