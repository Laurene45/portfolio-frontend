import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

import {FaGithub} from "react-icons/fa";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projets | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>



        <Row className="mb-5 mt-3 pt-md-3 ">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projets </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

    
        <div className="intro_btn-action pb-5 button">
          <Link to="/contact">
              <div id="button_h" className="ac_btn btn">
                Contactez-moi !
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
        </div>

        <div className="mb-5 po_items_ho fade-in-left">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                  <p>{data.techno}</p>
                  
                  <div>
                    <a href={data.link} target="_blank" rel="noopener noreferrer" >voir projet</a>
                    <a className="github" href={data.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <p className="other">{data.other}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
