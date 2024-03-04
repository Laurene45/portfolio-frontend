import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

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
              <Link to="/" > Accueil </Link>
              </p>
              <p> 
                <Link to="/projets" > Projets </Link>
              </p>
              <p>
                <Link to="/services" > Services </Link>
              </p>
              <p>
                <Link to="/contact" > Contact </Link>
              </p>
              <p>
                <Link to="/mentions_legales"> Mentions légales, CGU & Politique de confidentialité </Link>
              </p>
              <p>
                <Link to="/plan_site"> Plan du site </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
