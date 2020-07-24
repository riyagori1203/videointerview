import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div class="jumbotron jumbclrs">
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <div class="thumbnail">
                  <h2 class="leftpad">Find Jobs. Find Better. Find Faster.</h2>
                  <div class="container">
                    <div
                      class="jumbotron"
                      style={{
                        height: "250px",
                        paddingTop: "0px",
                        backgroundColor: "rgba(0, 0, 0, 0.102)!important",
                      }}
                    >
                      <nav class="navbar navbar-expand-lg navbar-light ">
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContentt"
                          aria-controls="navbarSupportedContentt"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon" />
                        </button>
                        <div
                          class="collapse navbar-collapse "
                          id="navbarSupportedContentt"
                        >
                          <ul class="navbar-nav mr-auto">
                            <li
                              class="nav-item active"
                              style={{ paddingLeft: "5px" }}
                            >
                              <a class="nav-link white underlin " href="#">
                                All Jobs <span class="sr-only">(current)</span>
                              </a>
                            </li>
                            <li
                              class="nav-item active "
                              style={{ paddingLeft: "5px" }}
                            >
                              <a class="nav-link white underlin" href="#">
                                Work From Home{" "}
                                <span class="sr-only">(current)</span>
                              </a>
                            </li>
                            <li
                              class="nav-item active "
                              style={{ paddingLeft: "5px" }}
                            >
                              <a class="nav-link white underlin" href="#">
                                Fresher Jobs
                                <span class="sr-only">(current)</span>
                              </a>
                            </li>
                            <li
                              class="nav-item active "
                              style={{ paddingLeft: "5px" }}
                            >
                              <a class="nav-link white underlin" href="#">
                                Contract Jobs{" "}
                                <span class="sr-only">(current)</span>
                              </a>
                            </li>
                            <li
                              class="nav-item active "
                              style={{ paddingLeft: "5px" }}
                            >
                              <a class="nav-link white underlin" href="#">
                                Freelancer{" "}
                                <span class="sr-only">(current)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <form class="form-inline">
                        <input
                          class="srch"
                          type="text"
                          placeholder="Search by Skills, Companies & Job Titles"
                        />
                        <button type="button" class="btn btn-dark srchbtn">
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
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12">
                <div class="thumbnail">
                  <h2 class="leftpad">Why Find. When You Can Create.</h2>
                  <div
                    class="jumbotron"
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
                    <button type="button" class="btn btn-dark visit">
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
              {/* <div class="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-6">
          <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 coln">

              </div>
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 coln">

              </div>
          </div>
      </div> */}
            </div>
          </div>
          &gt;
          <div
            class="embed-responsive embed-responsive-16by9"
            style={{
              marginRight: "10px",
              marginBottom: "130px!important",
              height: "500px",
              marginLeft: "200px",
              width: "70%",
            }}
          >
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowFullScreen
            />
          </div>
          <div class="container">
            <div
              class="jumbotron white"
              style={{ paddingTop: "15px", height: "400px" }}
            >
              <h1>
                Introducing : <strong>Interview Machine</strong>{" "}
              </h1>
              <br />
              <div class="row ">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
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
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
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
          <div class="row" style={{ marginTop: "0px" }}>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 mbs">
              <div
                class="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Job Opening!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Now Hiring!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Open Positions!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron "
                style={{ alignSelf: "center", height: "350px" }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Job Vacancies!</h5>
                    <p class="card-text">
                      Great job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ marginTop: "0px" }}>
            <div
              class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 "
              style={{ marginBottom: "200px" }}
            >
              <div
                class="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Job Opportunities!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Posts Vacant!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Poitions To Be Filled!</h5>
                    <p class="card-text">
                      Great Job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div
                class="jumbotron"
                style={{
                  alignSelf: "center",
                  height: "350px",
                  marginTop: "0px",
                }}
              >
                <div
                  class="card backgrndplain white"
                  style={{ alignSelf: "center!important", border: "0px" }}
                >
                  <img
                    src="images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Positions Open!</h5>
                    <p class="card-text">
                      Great job opening at this growth-paving companies to help
                      in your progress as an employee.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Apply Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="jumbotron backgrndplain"
            style={{ height: "230px", paddingTop: "20px", marginBottom: "0px" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Job Seekers
                  </h4>
                  <ul class="normal">
                    <li>
                      {" "}
                      <a class="normal" href="#">
                        Job Search
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="normal" href="#">
                        Job Search Login
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="normal" href="#">
                        Search Tips
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="normal" href="#">
                        Free Job Alerts
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="normal" href="#">
                        Find Companies
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Employers
                  </h4>
                  <ul class="normal">
                    <li>
                      <a class="normal" href="#">
                        Employer Login
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Job Posting
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Access Resume
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Database
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Advertise with us
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Research Reports
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    Stay Connected
                  </h4>
                  <ul class="normal">
                    <li>
                      <a class="normal" href="#">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Tinder
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <h4 style={{ marginLeft: "37px", color: "white" }}>
                    JobHunter
                  </h4>
                  <ul class="normal">
                    <li>
                      <a class="normal" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Careers with us/a&gt;
                      </a>
                    </li>
                    <a class="normal" href="#"></a>
                    <li>
                      <a class="normal" href="#" />
                      <a class="normal" href="#">
                        Send feedback
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a class="normal" href="#">
                        Jobs App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-copyright text-center">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/"> JobHunter.com</a>
              </div>
            </div>
          </div>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}
export default Home;
