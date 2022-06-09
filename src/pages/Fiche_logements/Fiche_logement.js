
import * as React from 'react';
import { useParams } from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;
// import rating from '../../composants/Rating/Rating';


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
  let htmlrat='';
  let starfull=<img src='/assets/etoile_pleine.png' alt=''></img>;
  let starempty=<img src='/assets/Vectoretoile_vide.png' alt=''></img>;

  // htmltag=<tagfiche name="hello"></tagfiche>;
  // htmlCarousel=<Carousel children >{logement.cover}</Carousel>;

  const id=useParams()
  logements.forEach((logement) => {
    if(id.id===logement.id)
            {   
              const intrating=parseInt(logement.rating);

              switch(intrating){
            case 0:
                htmlrat = <div className='rating'>{starempty}{starempty}{starempty}{starempty}{starempty}</div>;
              break;
            case 1:
              htmlrat = <div className='rating'>{starfull}{starempty}{starempty}{starempty}{starempty}</div>;
              break;
            case 2:
              htmlrat = <div className='rating'>{starfull}{starfull}{starempty}{starempty}{starempty}</div>;
               break;
            case 3:
              htmlrat = <div className='rating'>{starfull}{starfull}{starfull}{starempty}{starempty}</div>;
              break;
            case 4:
              htmlrat = <div className='rating'>{starfull}{starfull}{starfull}{starfull}{starempty}</div>;
              break;
            case 5:
              htmlrat = <div className='rating'>{starfull}{starfull}{starfull}{starfull}{starfull}</div>;
              break;
              default:
              }
              htmlpicture=logement.pictures.map((image)=><img src={image} alt={image}></img>);
              htmltitre=<h2 className='titre'>{logement.title}</h2>;
              htmlhost=<div className='host'><div className='avatar'><div className='hostname'>{logement.host.name}</div><img src={logement.host.picture} alt={logement.host.name}></img></div>{htmlrat}</div>;
              htmltag=logement.tags.map((tagname)=><h3 className='tag'>{tagname}</h3>);
              htmllocation=<p className='location'>{logement.location}</p>;
              htmldescription=<Collapse name="description" description={logement.description}></Collapse>;
              htmllistequi=logement.equipments.map((equipment)=><li className='equipement'>{equipment}</li>);
              htmlequipement=<Collapse name="equipements" description={htmllistequi} ></Collapse>
            }
        });
    return <section className='fichelogement'>{htmlpicture}<section className="details"><div className='wrapperdetails'><div className='headerdetails'>{htmltitre}{htmllocation}</div><div className='wrappertag'>{htmltag}</div></div>{htmlhost}</section>{htmldescription}{htmlequipement}</section>;
  }
  export default Fiche_logement;