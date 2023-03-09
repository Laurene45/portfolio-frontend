import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Mentions = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Mentions légales </title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Mentions légales </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Editrice </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Laurène COURDE : éditrice du site Internet </p>
              <p>Toute prise de contact avec le créateur du site Internet peut s’effectuer via l’adresse email : laurene.courde@gmail.com</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Hébergeur </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Nom de l’hébergeur : O2Switch </p>
              <p>Adresse de la société : Chemin des Pardiaux - 63000 Clermont-Ferrand – France.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Descriptif des services rendus </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Le site Internet "www.MaLoWeb.fr" est un portfolio contenant les différentes réalisations de l’éditrice du site.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Propriété intellectuelle </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Code source, graphisme, images, sons, animations, textes, ainsi que les informations et contenus dans le portfolio sont protégés par les droits de la propriété intellectuelle.</p>
              <p>La reproduction totale ou partielle de ce site web est interdite sans autorisation préalable et par écrit.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Gestion des données personnelles </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Les données personnelles sont protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
              <p>La reproduction totale ou partielle de ce site web est interdite sans autorisation préalable et par écrit.</p>
              <p>D’une façon générale, vous pouvez visiter ce site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations. Par exemple, pour envoyer un message via le formulaire de contact.</p>
              <p>Je vous informe que les données vous concernant seront traitées de façon confidentielle. Vos données sont conservées pour une durée de 24 mois. L’information, la rectification ou la suppression des données saisies sur ce site internet est possible : Vous pouvez accéder aux informations vous concernant, les rectifier ou les supprimer en vous adressant à nous par l’intermédiaire de cette adresse mail : laurene.courde@gmail.com</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Droit applicable et attribution de juridiction</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
