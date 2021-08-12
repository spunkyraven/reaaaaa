import "./App.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "react-timeline-semantic-ui";
import { Carousel } from "react-bootstrap";
import { CardGroup, Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">WASSUUUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Carousel className="carousel" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/MUSHROOM.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/VR.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/BOX.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="TIME">
        <Timeline
          direction="left"
          icon="heart"
          title="Title"
          time="Time"
          description="Description."
          color="red"
          tags={["tag1", "tag2"]}
          lineHeight={3}
        />
        <Timeline
          direction="right"
          icon="heart"
          title="Title"
          time="Time"
          description="Description."
          color="pink"
          tags={["tag1", "tag2"]}
          lineHeight={3}
        ></Timeline>
        <Timeline
          direction="left"
          icon="heart"
          title="Title"
          time="Time"
          description="Description."
          color="orange"
          tags={["tag1", "tag2"]}
          lineHeight={3}
        ></Timeline>
      </div>

      <div>
        <CardGroup className="cards">
          <Card>
            <Card.Img variant="top" src="./image/VR.jpg" />
            <Card.Body>
              <Card.Title>VR</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./image/MUSHROOM.jpg" />
            <Card.Body>
              <Card.Title>MUSHROOM</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./image/BOX.jpg" />
            <Card.Body>
              <Card.Title>BOX</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="card-group">
        <Badge bg="primary">DESIGN</Badge> <Badge bg="secondary">ART</Badge>{" "}
        <Badge bg="success">UI</Badge> <Badge bg="danger">COOL</Badge>{" "}
        <Badge bg="info">GRAPCHIC</Badge>{" "}
      </div>
    </div>
  );
}

export default App;
