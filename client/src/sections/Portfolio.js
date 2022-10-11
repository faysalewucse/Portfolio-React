import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio-section" class="py-5 text-light text-center">
      <div class="container">
        <h6>
          <i class="fa fa-arrow-left"></i> What I have Made?{" "}
          <i class="fa fa-arrow-right"></i>
        </h6>
        <h1>Portfolio Showcase</h1>
        <hr />
        <i class="fa fa-arrow-down"></i>
        <br />
        <i class="fa fa-arrow-down mb-5"></i>
        <div class="row">
          <div class="col">
            <button class="hvr-grow" type="button" data-filter="all">
              All
            </button>
            <button class="hvr-grow" type="button" data-filter=".category-a">
              WEB
            </button>
            <button class="hvr-grow" type="button" data-filter=".category-b">
              APPS
            </button>
            <button class="hvr-grow" type="button" data-filter=".category-c">
              ICONS
            </button>
          </div>
        </div>
        <div class="row py-5 mycontainer">
          <div class="col-md-4 mix category-a">
            <img class="img-fluid hvr-grow" src="./img/portfolio1.png" alt="" />
            <h4>Isometric Perspective Mock-Up</h4>
          </div>
          <div class="col-md-4 mix category-b">
            <img class="img-fluid hvr-grow" src="./img/portfolio2.png" alt="" />
            <h4>Time Zone App UI</h4>
          </div>
          <div class="col-md-4 mix category-b category-c" data-order="3">
            <img class="img-fluid hvr-grow" src="./img/portfolio3.png" alt="" />
            <h4>Viro Media Players UI</h4>
          </div>
          <div class="col-md-4 mix category-a category-d" data-order="4">
            <img class="img-fluid hvr-grow" src="./img/portfolio4.png" alt="" />
            <h4>Blog / Magazine Flat UI Kit</h4>
          </div>
          <div class="col-md-4 mix category-a">
            <img class="img-fluid hvr-grow" src="./img/portfolio1.png" alt="" />
            <h4>Isometric Perspective Mock-Up</h4>
          </div>
          <div class="col-md-4 mix category-b">
            <img class="img-fluid hvr-grow" src="./img/portfolio2.png" alt="" />
            <h4>Time Zone App UI</h4>
          </div>
          <div class="col-md-4 mix category-b category-c" data-order="3">
            <img class="img-fluid hvr-grow" src="./img/portfolio3.png" alt="" />
            <h4>Viro Media Players UI</h4>
          </div>
          <div class="col-md-4 mix category-a category-d" data-order="4">
            <img class="img-fluid hvr-grow" src="./img/portfolio4.png" alt="" />
            <h4>Blog / Magazine Flat UI Kit</h4>
          </div>
        </div>
        <a class="btn button" href="">
          LOAD MORE PROJECTS
        </a>
      </div>
    </section>
  );
}
