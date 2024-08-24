import React from 'react';
import './about.css';

export default function About() {
  return (
    <div>
      <div className="bg-img">
        <div className="container">
          <div className="topnav">
            <a href="/home">الجلسات</a>
            <a href="/about">عن البرنامج</a>
          </div>
        </div>

        <div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br></br>
        </div>

        <div className="main">
          <br /><br /><br /><br />

          <div className="row">
            <br /><br />

            <div className="content">
              <h2 className="content">.فاعلية برنامج قائم على المهارات الرقمية وأثره على تحصيل طلبة صعوبات التعلم في مدارس حائل</h2>
              <h2 className="content">:شكر وتقدير</h2>
              <h2 className="content">(RG-23141) هذا البرنامج تم دعمه من قبل عمادة البحث العلمي بجامعة حائل- المملكة العربية السعودية برقم</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}