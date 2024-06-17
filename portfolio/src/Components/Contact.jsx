import React from "react";
import "./../Css/contact.css";

const Contact = () => {
  return (
    <div id="screen">
      <div id="contact-container">
         <div id="first-box">
          <div className="image">
            <img className="w-h-100" src="https://w7.pngwing.com/pngs/344/761/png-transparent-computer-icons-call-icon-cdr-text-copyright.png" alt="" />
          </div>
          <div className="name">
            <p>Contact Me</p>
          </div>
          <div>
            <p>+91-7038044567</p>
          </div>
         </div>

         <div>
         <div className="image">
             <img className="w-h-100" src="https://logowik.com/content/uploads/images/513_email.jpg" alt="" />
          </div>
          <div className="name">
            <p>Email</p>
          </div>
          <div>
            <p>srushtiajadhav27@gmail.com</p>
          </div>
         </div>

         <div>
         <div className="image">
            <img className="w-h-100" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
          </div>
          <div className="name">
            <p>Github</p>
          </div>
          <div>
            <p>https://github.com/srushtimane27</p>
          </div>
         </div>

         <div>
         <div className="image">
             <img className="w-h-100" src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
          </div>
          <div className="name">
            <p>Github</p>
          </div>
          <div>
            <p>https://github.com/srushtimane27</p>
          </div>
         </div>
         
      </div>
    </div>
  );
};

export default Contact;
