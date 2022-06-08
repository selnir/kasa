
import * as React from 'react';
import { useParams } from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;
import Carousel from '../../composants/Carrousel/Carrousel';




function Fiche_logement() {

  let htmldescription='';
  let htmlequipement='';
 let htmltag='';
  let htmltitre='';
  // let htmlCarousel='';
  let htmllocation='';
  let htmllistequi='';
  let htmlhost='';
  let htmlpicture='';
  // htmltag=<tagfiche name="hello"></tagfiche>;
  // htmlCarousel=<Carousel children >{logement.cover}</Carousel>;

  const id=useParams()
  logements.forEach((logement) => {
    if(id.id===logement.id)
            { 
              htmlpicture=logement.pictures.map((image)=><img src={image}></img>);
              htmltitre=<h2 className='titre'>{logement.title}</h2>;
              htmlhost=<div className='host'><div className='hostname'>{logement.host.name}</div><img src={logement.host.picture} alt={logement.host.name}></img></div>;
              htmltag=logement.tags.map((tagname)=><h3 className='tag'>{tagname}</h3>);
              htmllocation=<p className='location'>{logement.location}</p>;
              htmldescription=<Collapse name="description" description={logement.description} ></Collapse>;
              htmllistequi=logement.equipments.map((equipment)=><li className='equipement'>{equipment}</li>);
              htmlequipement=<Collapse name="equipements" description={htmllistequi} ></Collapse>
            }
        });
    return <section className='fichelogement'>{htmlpicture}<section className="details"><div className='wrapperdetails'>{htmltitre}{htmllocation}<div className='wrappertag'>{htmltag}</div></div>{htmlhost}</section>{htmldescription}{htmlequipement}</section>;
  }
  export default Fiche_logement;