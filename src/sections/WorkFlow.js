import React from "react";

function WorkFlow() {
  return (
    <section id="workflow-section" className="text-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-0">
            <h5>How Do I work?</h5>
            <i className="fa fa-arrow-down text-success" />
            <h1>My Workflow</h1>
            <br />
            <p className="lead text-justify">
              I always follow specific steps when I’m working on a design
              project. In this way I can keep everything organised and it
              creates moments to talk about the project with my clients.
            </p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-1">Preparing</button>
            <br />
            <button className="btn btn-2">Design</button>
            <br />
            <button className="btn btn-3">Development</button>
            <br />
            <button className="btn btn-4">Details</button>
          </div>
          <div className="col-md-5 text-justify pl-0 align-self-center">
            <p className="change justify-content">
              For the Project at first I mostly ask questions and talk with my
              clients about what and how they want to complete their project. I
              want to get a super clear ideae of what they want and need. Only
              then can I deliver a product that both parties are happy with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow;
