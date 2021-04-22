import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export default function NavComponent() {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark">
      <Navbar.Brand href="/">CleanHouse</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">My Rooms</Nav.Link>
        <Nav.Link href="/">All Rooms</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav>
              {/* <LinkContainer to="/signup"> */}
                <Nav.Link>Signup</Nav.Link>
              {/* </LinkContainer> */}
              <Nav.Link href="/signin">SignIn</Nav.Link>
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
