import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavComponent() {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark">
      <Navbar.Brand href="#home">CleanHouse</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">All Rooms</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav>
              {/* <LinkContainer to="/signup"> */}
                <Nav.Link>Signup</Nav.Link>
              {/* </LinkContainer> */}
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}
