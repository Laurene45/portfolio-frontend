import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Mentions = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Mentions légales</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Mentions légales & Politique de confidentialité</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Editrice </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="color_sec py-4"> Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site "MaLoWeb" l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
              <p>Le présent site, accessible à l’URL https://maloweb.fr/ (le « Site »), est édité par :</p>
              <p>Laurène COURDE, résidant au 25 rue des églantines 45700 PANNES, de nationalité Française (France), né(e) le 08/04/1984, </p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Statut  </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Freelance - Auto-entrepreneur</p>
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Hébergement </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Le Site est hébergé par la société O2Switch, situé 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, (contact téléphonique ou email : (+33) 4 44 44 60 40).</p>
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Publication </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Le Directeur de la publication du Site est Laurène COURDE.</p>
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Accès au site </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Le Site est accessible gratuitement à tous les utilisateurs ayant un accès à Internet et en tout lieu, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'éditeur ne saurait être tenu responsable.</p>
              <p>Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Services fournis </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Le site Internet "www.MaLoWeb.fr" est un portfolio contenant les différentes réalisations de l’éditrice du site. Il est également possible de contacter l'éditrice suite à un formulaire pour un demande de devis, projets, etc...</p>
              <p> L'ensemble des activités de la société ainsi que ses informations sont présentés sur notre site "www.MaLoWeb.fr". Laurène Courde s’efforce de fournir sur le site "www.MaLoWeb.fr" des informations aussi précises que possibles. Les renseignements figurant sur le site Internet cité ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, toutes les informations indiquées sur ce site Internet sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.</p>
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Responsabilité </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Le Site “MaLoWeb" est développé à partir de plusieurs langages web: HTML / CSS / REACT.JS etc... Pour un meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Edge, Safari, Firefox, Google Chrome, etc...</p>
              <p> Les sources des informations diffusées sur lesite “MaLoWeb" sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>
              <p> Le Site "MaLoWeb" ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce Site.</p>
              <p> La responsabilité du Site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>            
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Confidentialité </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> La présente charte sur le respect de la vie privée (la « Charte ») a pour objectif de formaliser notre engagement quant au respect de la vie privée des utilisateurs du site internet  https://maloweb.fr/ (le « Site ») exploité par MaLoWeb – Laurène COURDE. </p>
              <p> La Charte et les Conditions Générales du Site forment un ensemble contractuel. Tous les termes en majuscules non-définis dans la présente Charte sont définis dans les Conditions Générales.</p> 
              <p> Dans le cadre de la mise à disposition de notre Site, nous traitons vos données à caractère personnel dans le respect du Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (« RGPD ») et dans les conditions exposées ci-après.</p>
              <p> Une donnée à caractère personnel désigne toute information se rapportant à une personne physique identifiée ou identifiable. Nous collectons et traitons des données à caractère personnel dans le cadre de la fourniture de nos Services ou de la communication à propos de ces Services exclusivement, en stricte conformité avec le RGPD. Nous collectons uniquement des données à caractère personnel adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées. Ainsi, il ne vous sera jamais demandé de renseigner des données à caractère personnel considérées comme « sensibles », telles que vos origines raciales ou ethniques, vos opinions politiques, philosophiques ou religieuses.</p>
              <p> En vous enregistrant sur le Site, vous nous autorisez à traiter vos données à caractère personnel conformément à la Charte. Si vous refusez les termes de cette Charte, veuillez vous abstenir d’utiliser le Site ainsi que les Services.</p>            
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
              <p> La reproduction totale ou partielle de ce Site  est interdite sans autorisation préalable et par écrit.</p>
              <p> D’une façon générale, vous pouvez visiter ce Site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations. Par exemple, pour envoyer un message via le formulaire de contact (nom, prénom, adresse mail et téléphone si celui est indiqué dans le corps du message).Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du Site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.</p>
              <p> Nous vous informons que les données vous concernant seront traitées de façon confidentielle. Vos données sont conservées pour une durée de 24 mois. L'information, la rectification ou la suppression des données saisies sur ce Site Internet est possible en vous adressant à nous par l’intermédiaire de cette adresse mail : laurene.courde@gmail.com.</p>
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Cookie </h3>
          </Col> 
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Le Site “MaLoWeb" peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du Site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce Site ne peuvent être fonctionnelles sans l’acceptation de cookies.</p>
              <p> Lors de votre première visite sur le Site, un bandeau cookies apparaîtra en page d’accueil. Un lien cliquable permet d’en savoir plus sur la finalité et le fonctionnement des cookies. La poursuite de la navigation sur une autre page du site ou la sélection d’un élément du Site (notamment : image, texte, lien, etc.) matérialise votre acceptation au dépôt des cookies visés sur votre ordinateur.</p>
            </div> 
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Liens hypertextes </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Les sites Internet peuvent offrir des liens vers d’autres sites Internet ou d’autres ressources disponibles sur Internet. Laurène COURDE ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites Internet. Cela ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation. Les utilisateurs, les abonnés et les visiteurs des sites Internet ne peuvent mettre en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable de Laurène COURDE. Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites Internet de Laurène COURDE, il lui appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de mise en place d'un hyperlien. Laurène COURDE se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.</p>
            </div>
          </Col>
        </Row>
        
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Propriété intellectuelle </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> Code source, logo, graphisme, images, sons, animations, textes, ainsi que les informations et contenus présents dans le portfolio sont protégés par les droits de la propriété intellectuelle, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.</p>
              <p> Toute reproduction, distribution, modification, adaptation, retransmission ou publication totale ou partielle de ce Site de ces différents éléments est strictement interdite sans autorisation préalable et par écrit de l'auteur du Site.</p>
              <p> Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.</p>
              <p> Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
            </div>
          </Col>
        </Row>



        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Droit applicable et juridiction compétente</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Les présentes conditions du Site cité, sont régies par les lois françaises et toutes contestations ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français. Pour toute question relative à l’application des présentes mentions, vous pouvez joindre l’éditeur aux coordonnées inscrites dans la section "Editrice".</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
