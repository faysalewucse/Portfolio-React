import React from "react";

function Experience() {
  return (
    <section id="experience-section" className="text-center text-light">
      <div className="container">
        <h6>What I have Learned So Far?</h6>
        <i className="fa fa-arrow-down text-success" />
        <h1>Experience</h1>
        <i className="fa fa-arrow-down text-success" />
        <div className="row py-5">
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={90}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                90%
              </text>
            </svg>
            <h6>HTML</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={85}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                85%
              </text>
            </svg>
            <h6>CSS</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={80}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                80%
              </text>
            </svg>
            <h6>Bootstrap</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={70}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                70%
              </text>
            </svg>
            <h6>Javascript</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={80}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                80%
              </text>
            </svg>
            <h6>C / C++</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={75}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                75%
              </text>
            </svg>
            <h6>JAVA</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={60}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                60%
              </text>
            </svg>
            <h6>Android Studio</h6>
          </div>
          <div className="col-md-3">
            <svg
              className="radial-progress"
              data-percentage={80}
              viewBox="0 0 80 80"
            >
              <circle className="incomplete" cx={40} cy={40} r={35} />
              <circle
                className="complete"
                cx={40}
                cy={40}
                r={35}
                style={{ strokeDashoffset: "39.58406743523136" }}
              ></circle>
              <text
                className="percentage"
                x="50%"
                y="57%"
                transform="matrix(0, 1, -1, 0, 80, 0)"
              >
                80%
              </text>
            </svg>
            <h6>Adobe</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
