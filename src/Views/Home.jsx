
                 import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Card,
  Nav,
  Carousel,
} from "react-bootstrap";

export default function Home() {
  const backgroundStyle = {
    backgroundColor: "#39bcf0",
    color: "white",
    boxShadow: "0 2px 20px 0px #3abcf0",
  };

  return (
    <div>
      <Container>
        <h3 className="display-5 ">Find jobs.Find better.Find faster</h3>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="card card text white bg-dark mb-3">
              <div class="card-header ">
                <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a class="nav-link white " href="#">
                      All sectors
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Information Technology
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Manufacturing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body text-dark">
                <Nav>
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-lg-3"
                      type="search"
                      placeholder="Search by skills,companies and job titles"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </Nav>
                <p class="card-text text white">
                  Trending searches : Jobs in Delhi, Jobs in Mumbai, Jobs in
                  Banglore, Jobs in Chennai
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="card card text white bg-dark mb-3">
              <div class="card-header">
                <p>
                  <b>BE AN ENTREPRENEUR!</b>
                </p>
              </div>
              <div class="card-body text-dark">
                <p class="card-text text white">
                  Build your own company! Be an entrepreneur!
                  <br /> Give wings to your idea through our incubation center
                  at RIDDL .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First top company"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <h2>A new way of conducting interviews</h2>
        <p>
          There will be two phases in your interview. You will be answering some
          preliminery questions about yourself in Phase 1. In Phase 2, you will
          be having a video call with your interviewer.
        </p>

        <Row className="mt-4">
          <Col md lg sm className="mb-3">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <h2>Phase 1</h2>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam adipisci modi impedit et optio sint
                  accusantium qui fugiat illum laboriosam blanditiis atque,
                  repellat placeat minus distinctio perferendis tempora.
                  Quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md lg sm>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <h2>Phase 2</h2>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam adipisci modi impedit et optio sint
                  accusantium qui fugiat illum laboriosam blanditiis atque,
                  repellat placeat minus distinctio perferendis tempora.
                  Quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
