import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form>
      <Form.Text className="font-weight-bold">
        Please provide us with your details and we will contact you back!
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="phone" placeholder="+91 1234567890" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
