import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
  name: string
  timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
  return {
    props: {
      staticData
    },
    revalidate: 10
  }
}

const Static: NextPage = (props: {
  staticData?: ApiResponse
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data: ApiResponse = await fetch("/api/hello").then(res => res.json())
    setClientSideData(data)
  }
  
  return (
    <Container className="main">
      <h1 className="my-5">Renderizações do Next.js</h1>
      
      <Row>

        <Col>
          <h3>Gerado estaticamente durante o build </h3>
          <h2>{props.staticData?.timestamp.toString()}</h2>
        </Col>

        <Col>
          <h3>Renderização cliente </h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Static