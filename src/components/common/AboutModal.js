import React from "react";
import { Modal, Button } from "react-bootstrap";

function AboutModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">PREMAP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>What is this project about?</h4>
        <br />
        <h5>
          {" "}
          Have you thought about predicting the future and what could this
          change?{" "}
        </h5>
        <p>
          We are PREMAP, a web platform dedicated to predicting new foci for the
          advancement of COVID-19, we use demographic data, geolocalized
          infection history series and CO2 emission data , which shows us urban
          agglomerations in real time. The data are cross-checked and with the
          use of artificial intelligence, new sources of dissemination can be
          predicted, helping governments and organizations to reduce the
          proliferation of the disease. So, are you going to launch with us?
        </p>

        <h4>Our Team</h4>
        <br />
        <h5>Alex Mendonça</h5>
        <h6>
          Control and Automation Engineer, graduated at UTFPR in Curitiba, acts
          as software develpment engineer.{" "}
        </h6>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/mendoncaalex/">
            https://www.linkedin.com/in/mendoncaalex/
          </a>
          <br />
          E-mail:{" "}
          <a href="mailto:alextorezin@gmail.com">alextorezin@gmail.com</a>
        </p>
        <h5>Alex Mendonça</h5>
        <h6>
          Control and Automation Engineer, graduated at UTFPR in Curitiba, acts
          as software develpment engineer.{" "}
        </h6>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/mendoncaalex/">
            https://www.linkedin.com/in/mendoncaalex/
          </a>
          <br />
          E-mail:{" "}
          <a href="mailto:alextorezin@gmail.com">alextorezin@gmail.com</a>
        </p>
        <h5>Alex Mendonça</h5>
        <h6>
          Control and Automation Engineer, graduated at UTFPR in Curitiba, acts
          as software develpment engineer.{" "}
        </h6>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/mendoncaalex/">
            https://www.linkedin.com/in/mendoncaalex/
          </a>
          <br />
          E-mail:{" "}
          <a href="mailto:alextorezin@gmail.com">alextorezin@gmail.com</a>
        </p>
        <h5>Caio César Silva</h5>
        <h6>Front-end Developer, graduating at UFMG in Belo Horizonte. </h6>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/caio-c%C3%A9sar-silva-1aa8b7101/">
            https://www.linkedin.com/in/caio-c%C3%A9sar-silva-1aa8b7101/
          </a>
          <br />
          E-mail:{" "}
          <a href="mailto:caiocesarsilva08@gmail.com">
            caiocesarsilva08@gmail.com
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AboutModal;
