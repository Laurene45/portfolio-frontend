import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Plan = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Plan du site </title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Plan du site </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Pages </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> 
                <a href="/home"> Accueil </a> 
              </p>
              <p> 
                <a href="/projets"> Projets  </a> 
                </p>
              <p>
                <a href="/about"> Qui suis-je ? </a> 
              </p>
              <p>
                <a href="/contacts"> Contacts </a>
              </p>
              <p>
                <a href="/mentions_legales"> Mentions légales </a>
              </p>
              <p>
                <a href="/plan_site"> Plan du site </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
