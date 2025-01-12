import React from 'react'
import "../Footerr/Footer.css";
import logo from '../../Assets/logo.png';
function Footer() {
  return (
   <div class="bg-gray-800 text-white">
   <section class="footer">

<div class="box-container">

    <div class="box">
        <h3>InternAura</h3>
        <p>Welcome to InternAura, where you can find the best internships and jobs in the world.<br></br>Thank you for visiting InternAura website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
    </div>

    <div class="box">
        <h3>Quick links</h3>
        <a href="#home"><i class="fas fa-chevron-circle-right"></i>Latest Internships</a>
        <a href="#about"><i class="fas fa-chevron-circle-right"></i> Latest Jobs</a>
        <a href="#skills"><i class="fas fa-chevron-circle-right"></i> Remote Internships</a>
        <a href="#education"><i class="fas fa-chevron-circle-right"></i> Remote Internships</a>
        <a href="#work"><i class="fas fa-chevron-circle-right"></i>  Internships</a>
        <a href="#experience"><i class="fas fa-chevron-circle-right"></i>Jobs</a>
    </div>

    <div class="box">
        <h3>Contact info</h3>
        <p> <i class="fas fa-phone"></i>+91 938984XXXX</p>
        <p> <i class="fas fa-envelope"></i>InternAura@gmail.com</p>
        <p> <i class="fas fa-map-marked-alt"></i>Bareilly, India-234001</p>
        <div class="share">

            <a href="https://www.linkedin.com/in/" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
            <a href="https://github.com/" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
            <a href="mailto:.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
            <a href="https://t.me/" class="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a>
        </div>
    </div>
</div>

<h1 class="credit">Designed <i class="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/alok-yadav-906920292"> Alok Yadav</a></h1>

</section>
    </div>
  )
}

export default Footer;
