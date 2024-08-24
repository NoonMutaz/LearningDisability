import './page.css';
import { NextPage } from 'next';

export default function First(){
    return(


<div>
     
     <div className="bg-img">
   <div className="container">
     <div className="topnav">
   <a href=' /home'  >الجلسات</a> 
       {/* <a href="#news"> </a> */}
       {/* <a href="#contact">Contact</a> */}
    
       <a  href='/about'  >عن البرنامج</a>
       <h1></h1>
     </div>
   </div></div>
   <br></br>
   <div><h3 >الجلسة الأولى : تصنيف مجموعة من الاشياء وفق خاصية او أكثر </h3>
   <h3 >التهيئة: نلاحظ ان الاشكال المعروضة تتفق في بعض الخواص وتختلف في اخرى مثلا التصنيف حسب اللون وحسب الشكل </h3>
   <h3   > :سير الدرس: عرض مجموعة اشكال مختلفة لتصنيفها من خلال انشطة تفاعلية ضمن البرنامج</h3>
   <h3></h3>
   </div>
   <br></br><br></br>
   <div>
     <a href='/first1' > <button   className='btn'  >!ابدأ</button></a></div>
      <br></br><br></br>     
</div>

    )
}