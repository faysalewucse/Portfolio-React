import React from "react";

function HeroSection() {
  return (
    <section id="banner-section" class="py-5">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="container v-center">
        <div class="row">
          <div class="col-md-6 text mt-5">
            <h4 class="mt-5">Welcome, I'm Muhammad Faysal</h4>
            <h1 class="m-0">I Design and Build Websites</h1>
            <h4 class="mb-5">
              I love to visualise ideas and make them come alive in a website.
            </h4>
            <a href="#">View CV</a>
            <a href="#">Hire Me</a>
          </div>
          <div class="col-md-6 text-center">
            <img class="img-fluid" src="./img/banner-image.png" alt="" />
            <div class="icons">
              <i class="fa fa-facebook-f social hvr-grow"></i>
              <i class="fa fa-whatsapp social hvr-grow"></i>
              <i class="fa fa-at social hvr-grow"></i>
              <i class="fa fa-phone social hvr-grow"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
