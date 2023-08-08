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
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Accès au site </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Conditions d'utilisation </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Le site Internet "www.MaLoWeb.fr" est développé à partir de plusieurs langages web : HTML / CSS / REACT.JS etc... Pour un meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Edge, Safari, Firefox, Google Chrome, etc... </p>
              <p> Laurène COURDE met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites Internet. Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de... , et signaler toutes modifications du site qu'il jugerait utile. Il n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler. </p> 
              <p> Cookie : Le site "www.MaLoWeb.fr" peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.</p>
              <p> Liens hypertextes : Les sites Internet peuvent offrir des liens vers d’autres sites Internet ou d’autres ressources disponibles sur Internet. Laurène COURDE ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites Internet. Cela ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.
                  Les utilisateurs, les abonnés et les visiteurs des sites Internet ne peuvent mettre en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable de Laurène COURDE.
                  Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites Internet de Laurène COURDE, il lui appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de mise en place d'un hyperlien. Laurène COURDE se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
                  
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Services fournis </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Le site Internet "www.MaLoWeb.fr" est un portfolio contenant les différentes réalisations de l’éditrice du site.</p>
              <p> L'ensemble des activités de la société ainsi que ses informations sont présentés sur notre site "www.MaLoWeb.fr". Laurène Courde s’efforce de fournir sur le site "www.MaLoWeb.fr" des informations aussi précises que possibles. Les renseignements figurant sur le site Internet cité ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, toutes les informations indiquées sur ce site Internet sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Propriété intellectuelle </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Code source, logo, graphisme, images, sons, animations, textes, ainsi que les informations et contenus présents dans le portfolio sont protégés par les droits de la propriété intellectuelle, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs..</p>
              <p> Toute reproduction, distribution, modification, adaptation, retransmission ou publication totale ou partielle de ce site web de ces différents éléments est strictement interdite sans autorisation préalable et par écrit de l'auteur du site Internet.</p>
              <p> Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Collecte des données</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Les données personnelles sont protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
              <p> La reproduction totale ou partielle de ce site web est interdite sans autorisation préalable et par écrit.</p>
              <p> D’une façon générale, vous pouvez visiter ce site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations. Par exemple, pour envoyer un message via le formulaire de contact. Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.</p>
              <p> Je vous informe que les données vous concernant seront traitées de façon confidentielle. Vos données sont conservées pour une durée de 24 mois. L’information, la rectification ou la suppression des données saisies sur ce site Internet est possible : Vous pouvez accéder aux informations vous concernant, les rectifier ou les supprimer en vous adressant à nous par l’intermédiaire de cette adresse mail : laurene.courde@gmail.com</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Droit applicable et juridiction</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Les présentes conditions du site web cité sont régies par les lois françaises et toutes contestations ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
