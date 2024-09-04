import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid className='footer text-white py-7'>
      <Row>
        <Col >
          © 2024 Your Company
        </Col>
      </Row>
      <Row>
      <Col>
          <a href='/privacy' className='text-white'>Privacy Policy</a> | <a href='/terms' className='text-white'>Terms of Service</a>
        </Col>
      </Row>
    </Container>
  );
}
