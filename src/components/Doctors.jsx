import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = ({ doctors }) => {
  console.log(doctors);
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "rgb(166,18,189)" }}>
        {" "}
        Our Doctors
      </h3>
      <Row>
        {doctors.map((doctor, index) => (
          <Col key={(index)} xs={6} sm={4} md={3}>
            <img src={doctor.img} alt={doctor.name} className="img-thumbnail" />
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
