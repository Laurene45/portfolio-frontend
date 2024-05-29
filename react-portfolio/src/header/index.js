import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logo from "../assets/images/logos/logo_black_petit_format.JPG";
import CGV from "../assets/pdf/CGV Maloweb mise en forme site web.pdf";
import { useEffect } from "react";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
    
  };

  const AxeptioIntegration = () => {
    useEffect(() => {
      if (!window.axeptioSettings) {
        window.axeptioSettings = {
          clientId: "64e3391ac265b5883b4ff716",
          
        };
  
        (function (d, s) {
          var t = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
          e.async = true;
          e.src = "//static.axept.io/sdk-slim.js";
          t.parentNode.insertBefore(e, t);
        })(document, "script");
      }
    }, []);
  
    return null;
  };
  

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          {/* <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link> */}
          
          <Link className="navbar-brand nav_ac" to="/" title="logo" >
            <img className="mon_logo" src={logo} alt="logo"  /> 
          </Link>

          <div className="d-flex align-items-center">
          <Themetoggle />
            <button className="menu__button nav_ac2" aria-label="menu_button" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3" title="Accueil" >Accueil </Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/projets" className="my-3" title="Projets">Projets </Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/services" className="my-3" title="Services" >Services </Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3" title="Contact" >Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex social">
              <a href={socialprofils.github} title={socialprofils.github} target="_blank" rel="noopener noreferrer" > Github </a>
              <a href={socialprofils.linkedin} title={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" > Linkedin </a>
            </div>
            <div className="d-flex"></div>
              <a href="/mentions_legales" title="/mentions_legales"> Mentions légales & Politique de confidentialité</a>
              <a href={CGV} title={CGV}> CGV </a>
              <a href="/plan_site" title="/plan_site"> Plan du site </a>
              <p className="copyright m-0">© Copyright 2023 __ MaLoWeb</p>
            </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

      <AxeptioIntegration />

    </> 
  );
};

export default Headermain;
