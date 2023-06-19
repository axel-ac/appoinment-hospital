import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";

const Doctors = ({ doctors }) => {
  console.log(doctors);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166,18,189)" }}>
        {" "}
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((doctor, index) => (
          <Col key={(index)} xs={6} sm={4} md={3}>
            <img src={doctor.img} alt={doctor.name} className="img-thumbnail doctor-img" />
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal/>
    </Container>
  );
};

export default Doctors;
