import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import error from "../../assets/images/error.jpg";

/**@function showing error page
 *
 * @returns (<Error/>)
 */

export const Error = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> A propos de {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Erreur </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
            <div className="d-flex justify-content-center align-items-center">
              <p className='text_erreur'>Oups! La page que vous demandez n&lsquo;existe pas.</p>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <Link className="text_lien" to="/index.html">Retourner sur la page d&lsquo;accueil</Link>
            </div>

            <div className="image d-flex justify-content-center align-items-center ">
              <img className="image_erreur" src={error} alt="photo_erreur" />
            </div>
        </Row> 
      </Container>
    </HelmetProvider>
  );
};

