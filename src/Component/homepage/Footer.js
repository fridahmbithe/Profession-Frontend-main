// import React from "react";
// const Footer = () =>{
// return (
//     <>Footer</>
// )
// }
// export default Footer;
import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";

function Footer() {
  return (
<div className="container">
    <div className="logo">
       
    <div className="Contact us">
        <h2> Contact Us </h2>
   
            <li> +254 020 331 85 81 | +254700000000</li>
            <li> kemissupport@education.go.ke</li>
            <li> kemis@education.go.ke</li>
            <li>www.education.go.ke</li>
            <li>kemis.education.go.ke</li>

        <div className="Quick Links">
            <h2>Tutorials </h2>
            <li>FAQs</li>
            <li>CREDITS</li>
            <li>DATA POLICY</li>
            <li>MEDIA LINKS</li>

        <div className="Quick Links2">
            <li>NHIF EDUAFYA</li>
            <li>CBA PORTAL</li>
            <li>UPCOMING EVENTS</li>
            <li>MINISTRY OF EDUCATION</li>

        <div className="Legal">
            <h2>TERMS AND CONDITIONS </h2>
            <li>LICENSE AGREEMENT</li>
            <li>PRIVACY POLICY</li>
            <li>COPYRIGHT INFORMATION </li>
            <li>COOKIES POLICY</li>



    <div className="copyright">
    <p>&copy; {new Date().getFullYear()} Ministry of Education</p>

    <div className="Follow Us">
    <p>FOLLOW @EduMinKenya ON:</p>
    <ul>
    <li>Facebook <link/> </li>
    <li> Twitter
    <a href="https://twitter.com/EduMinKenya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            </a>
    </li>
    <li> Youtube
    <a href="https://facebook.com/EduMinKenya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
            </a>

    <a href="https://instagram.com/EduMinKenya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            </a>
    </li>

    </ul>

    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

</div>
  );
}

export default Footer;
