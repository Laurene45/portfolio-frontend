import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import CookieConsent from "react-cookie-consent";
import logo from "../assets/images/logos/logo_black_petit_format.JPG";
import CGV from "../assets/pdf/CGV_2023.pdf";


const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
    
  };
  

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          {/* <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link> */}
          
          <Link className="navbar-brand nav_ac" to="/" >
            <img className="mon_logo" src={logo} alt="logo original"  /> 
          </Link>

          <div className="d-flex align-items-center">
          <Themetoggle />
            <button className="menu__button nav_ac2" onClick={handleToggle}>
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
                  <Link  onClick={handleToggle} to="/" className="my-3">Accueil </Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/projets" className="my-3">Projets </Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">Qui suis-je ? </Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.github}> Github </a>
              <a href={socialprofils.linkedin}> Linkedin </a>
            </div>
            <div className="d-flex"></div>
              <a href="/mentions_legales"> CGU & Politique de confidentialité </a>
              <a href={CGV}> CGV </a>
              <a href="/plan_site"> Plan du site </a>
              <p className="copyright m-0">© Copyright 2023 __ MaLoWeb</p>
            </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

      <CookieConsent 
        debug={true}
        location="bottom"
        buttonText="OK"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={365}
      >
        Ce site web utilise les cookies. Pour plus d'informations, voir les <a href='/mentions_legales'> CGU et politique de confidentialité</a></CookieConsent>
    </>
  );
};

export default Headermain;
