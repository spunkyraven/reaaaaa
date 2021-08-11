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
        />
        <Timeline
          direction="left"
          icon="heart"
          title="Title"
          time="Time"
          description="Description."
          color="orange"
          tags={["tag1", "tag2"]}
          lineHeight={3}
        />
      </div>
    </div>
  );
}

export default App;
