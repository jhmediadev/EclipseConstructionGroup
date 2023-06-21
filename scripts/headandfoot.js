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
                <li class="nav__item"><a href="#">SERVICES</a></li>
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
    <footer class="block block--white footer">
        <div class="container grid">
            <section>
                <article class="footer-links">
                    <li><a href="../content/services-features.html">SERVICES<a></li>
                    <li><a href="../content/services-features.html">PORTFOLIO<a></li>
                    <li><a href="../content/myportfolio.html">ABOUT<a></li>
                    <li><a href="../content/serviceform.html">CONTACT<a></li>
                    <li><a href="../content/mybio.html">CAREERS<a></li>
                
                <div>
                    <img id="backtotop"src="../images/BacktoTop.png">
                </div>
                <div class="connect_withme">
                    <p>FOLLOW US ON SOCIAL MEDIA</p>
                    <div class="icons">
                        <a href="https://www.facebook.com/" target="_blank"><img src="/images/Facebook.png" alt="" width="40"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="/images/Instatram.png" alt="" width="40"></a>
                        <a href="https://twitter.com/home" target="_blank"><img src="/images/Twitter.png" alt="" width="40"></a>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy Copyright 2023</p>
                </div>
                
                </article>
            </section>
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

