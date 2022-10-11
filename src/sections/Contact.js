import React from "react";

export default function Contact() {
  return (
    <section id="contact-section" className="text-light">
      <div className="container">
        <h6>Have Any Query?</h6>
        <i className="fa fa-arrow-down text-success" />
        <h1>Contact Me</h1>
        <p className="lead w-75 m-auto">
          I am a professional WordPress and Graphic Designer. I work in these
          fields for 2 years. I am confident, I will satisfy you with my
          professional experiences.
        </p>
        <hr />
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <i className="fa fa-map mt-3 mb-4 text-primary" />
              <h4>Meeting Address</h4>
              <p className="lead">Dhaka,Bangladesh</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <i className="fa fa-phone mt-3 mb-4 text-success" />
              <h4>Give Me a Call</h4>
              <p className="lead">+8801634495020</p>
            </div>
          </div>
          <div className="col-md-4">
            <a href="">
              <div className="card">
                <i className="fa fa-envelope mb-4 mt-3 text-danger" />
                <h4>Send Me Mail</h4>
                <p className="lead">faysal.ewucse@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
        <form action="" className="mt-5">
          <div className="row">
            <div className="col">
              <input type="text" required="" placeholder="Name" />
            </div>
            <div className="col">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <input type="email" required="" placeholder="E-mail" />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Facebook URL ID(Ex:facebook.com/faysalahmed.me)"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <textarea
                name="message"
                required=""
                id=""
                cols={30}
                rows={5}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row mt-3 text-left">
            <div className="col">
              <input className="submit" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
