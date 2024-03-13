import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  datagoal,
  meta,
  avis,
  services,
  sector,
} from "../../content_option";
import moi from "../../assets/images/profil2.jpg";
import { Link } from "react-router-dom";

export const About = () => {
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
            <h1 className="display-4 mb-4">Services</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
            
        <div className="intro_btn-action pb-5 button">
          <Link to="/contact" title="/contact">
              <div id="button_h" className="ac_btn btn">
                Contactez-moi !
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
        </div>

        <Row className="sec_sp fade-in-left">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
            <img className="mon_image scale-up-center" src={moi} alt="photo_de_moi" />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
              <p>{dataabout.aboutme3}</p>
              <p>{dataabout.aboutme4}</p>
              <p>{dataabout.aboutme5}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp fade-in-left">
          <Col lg="5">
            <h3 className="color_sec py-4">{datagoal.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{datagoal.goalme1}</p>
              <p>{datagoal.goalme2}</p>
              <p>{datagoal.goalme3}</p>
              <p>{datagoal.goalme4}</p>
              <p>{datagoal.goalme5}</p>
              <p>{datagoal.goalme6}</p>
              <p>{datagoal.goalme7}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp fade-in-right">
          <Col lg="5">
            <h3 className="color_sec py-4">Quel type de missions ?</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp fade-in-left">
          <Col lg="5">
            <h3 className="color_sec py-4">{sector.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{sector.sector1}</p>
              <p>{sector.sector2}</p>
              <p>{sector.sector3}</p>
              <p>{sector.sector4}</p>
              <p>{sector.sector5}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp fade-in-right">
          <Col lg="5">
            <h3 className="color_sec py-4">Leurs témoignages</h3>
          </Col>
          <Col lg="7">
            {avis.map((data, i) => {
              return (
                <div className="avis_ py-4" key={i}>
                  <h5 className="avis__title">{data.title}</h5>
                  <p>{data.description}</p>
                  <p>{data.description2}</p>
                  <p>{data.description3}</p>
                  <p>{data.description4}</p>
                  <p>{data.description5}</p> 
                </div>
              );
            })}
          </Col>
        </Row>
        {/* <Row className=" sec_sp fade-in-right">
          <Col lg="5">
            <h3 className="color_sec py-4">Mon parcours formation</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
