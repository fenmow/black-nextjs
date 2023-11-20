import { NextPage } from "next";
import { Col, Container, Row } from "reactstrap";

const Dynamic: NextPage = () => {
  return (
    <Container className="main">
      <h1 className="my-5">Renderizações do Next.js</h1>
      
      <Row>

        <Col>
          <h3>Renderização do servidor: </h3>
        </Col>

        <Col>
        <h3>Renderização do cliente: </h3>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Dynamic