import Collapse from "../../composants/Collapse/Collapse";
import Banner from "../../composants/Banner/Banner";

function A_propos() {
    return  <section className="apropos"> <Banner img="/assets/BackgroundAproposBanner.jpg"></Banner>
    <section className="wrapperapropos"> 
    <Collapse className="rubrique"  name="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." ></Collapse>
    <Collapse className="rubrique"  name="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." ></Collapse>
    <Collapse className="rubrique"  name="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." ></Collapse>
    <Collapse className="rubrique"  name="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." ></Collapse>
    </section></section>;
  }
  export default A_propos;



  