
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function BSForm({ myform }) {
  return (
    <div className="myform">
      <Form style={{width: "50%"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>   
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write Your Message</Form.Label>
          <Form.Control as="textarea" rows={8}  />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" className="custom-button"/>
      </Form>
    </div>
    
  );
}
