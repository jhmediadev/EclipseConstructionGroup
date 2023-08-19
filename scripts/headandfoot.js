'use strict';

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        
    <nav class="nav collapsible">
        <div class="block__logo">
            <a href="../index.html"><img class="logo" href="/"  src="/images/EclipseLogo.png"></a>
            <p class="slogan" >Central Florida's Construction Leader</p>
        </div>
        <span class="menu--span">
            <img class="menu--item" src="/images/menu_icon.png" alt="">
        </span>

        <div class="collapsible__content collapsible--expanded">
            <ul class="list nav__list">
                <li class="nav__item"><a href="../index.html">HOME</a></li>
                    <div class="dropmenu">
                        <a class="list nav__item dropmenu" href="#">SERVICES</a>
                            <ul class="dropcontent">
                                <a href="#">DESIGN</a>
                                <a href="#">INDUSTRIAL BUILDINGS</a>
                                <a href="#">OFFICE BUILDINGS</a>
                                <a href="#">OFFICE BUILDOUTS</a>
                                <a href="#">RETAIL / STRIP CENTERS</a>
                                <a href="#">RESIDENTIAL PROJECTS</a>
                            </ul>
                    </div>    
                <li class="nav__item"><a href="#">PORTFOLIO</a></li>
                <li class="nav__item"><a href="#">ABOUT</a></li>
                <li class="nav__item"><a href="#">CONTACT US</a></li>
                <li class="nav__item"><a href="#">CAREERS</a></li>
            </ul>
        </div>
    </nav>

    `  

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => 
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
);     
}

}




class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
    <footer class="footer2">
        <div class="container2">
            <div class="footer-row">
                    <div class="footer-col ipad-left">
                        &nbsp;
                    </div>
                    <div class="footer-col">
                        <h4>QUICK LINKS</h4>
                        <ul class="new--footer-links">
                            <li><a href="#">SERVICES</a></li>
                            <li><a href="#">PORTFOLIO</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#">CAREERS</a></li>
                        </ul>
                    </div>
                    <div class="footer-col ipad-soc-col">
                        <h4 class="follow_us">FOLLOW US ON SOCIAL MEDIA</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <!--<div class="footer-col-3">
                       <h4 class="contact">CONTACT US</h4>
                        <div class="contact-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <p class="contact-number">407-555-5555</p>
                        <div class="footer-col ipad-right">
                        &nbsp;
                        </div>
                    </div>-->       
                    <div class="footer-col-4">
                        &nbsp
                    </div>
                    <div class="footer-col-5">
                         <img class="contact" src="../images/ContactUsSnip2.png" height="112" width="120">
                        </div>       
                     <div class="footer-col ipad-right">
                     &nbsp;
                 </div>

            </div>
            <div class="footer__brand">
                <p>&copy &nbsp;Copyright 2023 Eclipse Construction Group</p>
            </div>
        </div>
    </footer>

    
    `

    $("img#backtotop").click( () => {
      $("html").animate({ scrollTop: 0 }, 300);
    });

}

};



customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

