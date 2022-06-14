
import * as React from 'react';
import { useParams } from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;
import { useNavigate } from 'react-router';
import rating from '../../composants/Rating/Rating';
import Carousel from '../../composants/Carousel/Carousel';




function Fiche_logement() {

  const navigate = useNavigate();
  const urlcards=`/NoPage`;
  let htmltag='';
  let htmllistequi='';
  let htmlrat='';
  let html='';
  let htmlcarousel='';
  let test=false;
  const id=useParams();

  navigate(urlcards);

  const logement=logements.find(function (logement) {
    if(logement.id===id.id){
      test=true;
      return logement;
    }
  });  
              const intrating=parseInt(logement.rating);

              htmlrat=rating(intrating);

              htmltag=logement.tags.map((tagname)=><h3 className='tag'>{tagname}</h3>);
              htmllistequi=logement.equipments.map((equipment)=><li className='equipement'>{equipment}</li>);
              htmlcarousel=logement.pictures.map((image)=><img src={image} alt={image}></img>)
              // test=true;
              html=<section className='fichelogement'>
                      <div className='wrapper_carousel'><Carousel>{htmlcarousel}</Carousel></div>
                        <section className="details">
                          <div className='wrapperdetails'>
                            <div className='headerdetails'>
                              <h2 className='titre'>{logement.title}</h2>
                                <p className='location'>{logement.location}</p>
                            </div>
                            <div className='wrappertag'>{htmltag}</div>
                          </div>
                          <div className='host'>
                            <div className='avatar'>
                              <div className='hostname'>{logement.host.name}</div>
                                <img src={logement.host.picture} alt={logement.host.name}></img>
                                </div>{htmlrat}</div>
                          </section><section className='wrapperdescription'>
                      <Collapse name="description" description={logement.description}></Collapse>
                      <Collapse name="equipements" description={htmllistequi} ></Collapse>
                    </section></section>;
                    
                  
        

    return <>{html}</>;
  }
  export default Fiche_logement;