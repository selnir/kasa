import * as React from 'react';
import { useParams ,Navigate} from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;
import rating from '../../composants/Rating/Rating';
import Carousel from '../../composants/Carousel/Carousel';




function Fiche_logement() {

  let htmltag='';
  let htmllistequi='';
  let htmlrat='';
  let html='';
  let htmlcarousel='';
  const id=useParams();

;

  const logement=logements.find(function (logement) {
    if(logement.id===id.id){
      return logement;
    }
  });  


  if(logement){

 
              const intrating=parseInt(logement.rating);

              htmlrat=rating(intrating);

              htmltag=logement.tags.map((tagname)=><h3 key={tagname} className='tag'>{tagname}</h3>);
              htmllistequi=logement.equipments.map((equipment)=><li key={equipment} className='equipement'>{equipment}</li>);
              htmlcarousel=logement.pictures.map((image)=><img key={image} src={image} alt={image}></img>)
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
                    
                  
        

    return<>{html}</>
  }
  return <Navigate replace to='/NoPage' />
  }
  export default Fiche_logement;