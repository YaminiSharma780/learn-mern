import Accordion from "react-bootstrap/Accordion";
import styles from "./MyMy.module.css";
export default function AboutAbout(props) {
  const bgColor = "#404041";
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : bgColor,
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <>
      {/* ACCORDIAN CONTAINER */}
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : bgColor,
          // marginTop: "80px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          About Us
        </p>
        <Accordion
          className={
            props.mode === "light" ? styles.AccordLight : styles.AccordDark
          }
          // {styles.Accord}
          defaultActiveKey="0"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Analyse</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Learn</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Perform</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
