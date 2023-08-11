import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import PropTypes from "prop-types";
import styles from "./MyMy.module.css";
import { Switch, Route, Link } from "react-router-dom";

function NavNav(props) {
  const bgColor = "#404041";
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : bgColor,
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          bg={props.mode}
          data-bs-theme={props.mode}
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              {props.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={
                props.mode === "light"
                  ? styles.OffCanvasLight
                  : styles.OffCanvasDark
              }
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Util App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      DAction 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      DAction 2
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      DAction 3
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={myStyle}
                  />
                  <Button style={myStyle} variant="btn btn-primary">
                    Search
                  </Button>
                </Form>
                <span className="mx-1">
                  <Button
                    onClick={props.changeMode}
                    style={{ height: 40, width: 40 }}
                    className="rounded-circle"
                    variant={`btn btn-outline-${props.currentButton}`}
                  ></Button>
                </span>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
NavNav.propTypes = { title: PropTypes.string.isRequired }; //The prop `title` is marked as required in `NavbarComponent`, but its value is `undefined`.
NavNav.defaultProps = { title: "Customize your Title" };
export default NavNav;
