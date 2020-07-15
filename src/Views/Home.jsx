import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbclrs">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="thumbnail">
                <h2 className="leftpad">
                  Find Jobs. Find Better. Find Faster.
                </h2>
                <div className="container">
                  <div
                    className="jumbotron"
                    style={{
                      height: "250px",
                      paddingTop: "0px",
                      backgroundColor: "rgba(0, 0, 0, 0.102)!important",
                    }}
                  >
                    <nav className="navbar navbar-expand-lg navbar-light ">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContentt"
                        aria-controls="navbarSupportedContentt"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div
                        className="collapse navbar-collapse "
                        id="navbarSupportedContentt"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li
                            className="nav-item active"
                            style={{ paddingLeft: "5px" }}
                          >
                            <a className="nav-link white underlin " href="#">
                              All Jobs{" "}
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li
                            className="nav-item active "
                            style={{ paddingLeft: "5px" }}
                          >
                            <a className="nav-link white underlin" href="#">
                              Work From Home{" "}
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li
                            className="nav-item active "
                            style={{ paddingLeft: "5px" }}
                          >
                            <a className="nav-link white underlin" href="#">
                              Fresher Jobs
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li
                            className="nav-item active "
                            style={{ paddingLeft: "5px" }}
                          >
                            <a className="nav-link white underlin" href="#">
                              Contract Jobs{" "}
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li
                            className="nav-item active "
                            style={{ paddingLeft: "5px" }}
                          >
                            <a className="nav-link white underlin" href="#">
                              Freelancer{" "}
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <form className="form-inline">
                      <input
                        className="srch"
                        type="text"
                        placeholder="Search by Skills, Companies & Job Titles"
                      />
                      <button type="button" className="btn btn-dark srchbtn">
                        Search
                      </button>
                    </form>
                    <br />
                    <br />
                    <p>
                      {" "}
                      <strong>Trending searches :</strong> Jobs in Delhi, Jobs
                      in Mumbai, Jobs in Banglore, Jobs in Chennai
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div className="thumbnail">
                <h2 className="leftpad">Why Find. When You Can Create.</h2>
                <div
                  className="jumbotron"
                  style={{
                    paddingTop: "7px",
                    height: "250px",
                    backgroundColor: "rgba(0, 0, 0, 0.102)!important",
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>BE AN ENTREPRENEUR!</h3>
                  <br />
                  <p style={{ textAlign: "center" }}>
                    Build your own company! Be an entrepreneur! Give wings to
                    your idea through our incubation center at{" "}
                    <strong>RIDDL</strong> .
                  </p>
                  <p style={{ color: "gray", textAlign: "center" }}>
                    * conditions applied
                  </p>
                  <button type="button" className="btn btn-dark visit">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="https://riidl.org/"
                    >
                      Visit our website
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="embed-responsive embed-responsive-16by9"
            style={{
              marginRight: "10px",
              marginBottom: "130px!important",
              height: "500px",
              marginLeft: "200px",
              width: "70%",
            }}
          >
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowFullScreen
            />
          </div>
          <div className="container">
            <div
              className="jumbotron white"
              style={{ paddingTop: "15px", height: "400px" }}
            >
              <h1>
                Introducing : <strong>Interview Machine</strong>{" "}
              </h1>
              <br />
              <div className="row ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <br />
                  <h5>What is the interview machine?</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <br />
                  <h5>How does interview machine work?</h5>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "0px" }}>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 mbs">
              <div
                className="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Job Opening!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Now Hiring!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Open Positions!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Job Vacancies!</h5>
                    <p className="card-text">
                      Great job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "0px" }}>
            <div
              className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 "
              style={{ marginBottom: "200px" }}
            >
              <div
                className="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Job Opportunities!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Posts Vacant!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Poitions To Be Filled!</h5>
                    <p className="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                className="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  className="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Positions Open!</h5>
                    <p className="card-text">
                      Great job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="jumbotron backgrndplain"
            style={{ height: "230px", paddingTop: "20px", marginBottom: "0px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Job Seekers
                  </h4>
                  <ul className="normal">
                    <li>
                      {" "}
                      <a className="normal" href="#">
                        Job Search
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="normal" href="#">
                        Job Search Login
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="normal" href="#">
                        Search Tips
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="normal" href="#">
                        Free Job Alerts
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="normal" href="#">
                        Find Companies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Employers
                  </h4>
                  <ul className="normal">
                    <li>
                      <a className="normal" href="#">
                        Employer Login
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Job Posting
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Access Resume
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Database
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Advertise with us
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Research Reports
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Stay Connected
                  </h4>
                  <ul className="normal">
                    <li>
                      <a className="normal" href="#">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Tinder
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    JobHunter
                  </h4>
                  <ul className="normal">
                    <li>
                      <a className="normal" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Careers with us/a&gt;
                      </a>
                    </li>
                    <a className="normal" href="#"></a>
                    <li>
                      <a className="normal" href="#" />
                      <a className="normal" href="#">
                        Send feedback
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="normal" href="#">
                        Jobs App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-copyright text-center">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/"> JobHunter.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
