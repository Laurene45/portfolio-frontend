import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import CV from "../../assets/pdf/cv.pdf";
import ImgCv from"../../assets/images/img_cv.png";

import me2 from "../../assets/images/me2.JPG"

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
            <h1 className="display-4 mb-4">Qui suis-je ?</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> {dataabout.title}</h3>
            <img className="mon_image" src={me2} alt="photo_de_moi" />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
              <p>{dataabout.aboutme3}</p>
              <a href={CV}> 
                <img src={ImgCv} alt="" style={{ "width":"40px" , "marginRight" : "20px" , "marginTop" : "20px" , "marginLeft" : "10px"}}/>
              Télécharger CV
              </a>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Formations</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Compétences</h3>
          </Col>
          <Col lg="7">
          <div className="box_image">
          {skills.map((data, i) => {
            return (
              <div className="box_image_taille" key={i}>
                  <h4 className="progress-title">{data.name}</h4>
                  <img className="img_icon" src={data.image} alt="icon" style={{ "width":"30px"}}></img>
                  {/* <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      {/* <div className="progress-value">{data.value}%</div> }
                    </div> 
                  </div>*/}
                </div>
              );
            })}
            </div> 
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
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
      </Container>
    </HelmetProvider>
  );
};
