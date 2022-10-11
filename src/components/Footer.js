import React from "react";

export default function Footer() {
  return (
    <footer id="footer-section">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>
              Muhammad Faysal{" "}
              <span style={{ color: "green", fontWeight: 800 }}>.</span>
            </h1>
            <p className="lead">
              Thanks again for watching my website. I’m always active in this
              social media under included.
              <br /> So you can connect with me
            </p>
            <div className="icons">
              <i className="fa fa-facebook-f social hvr-grow" />
              <i className="fa fa-whatsapp social hvr-grow" />
              <i className="fa fa-at social hvr-grow" />
              <i className="fa fa-phone social hvr-grow" />
            </div>
            <hr />
            <h6>
              All Right Reserved - <a href="">Muhammad Faysal</a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
