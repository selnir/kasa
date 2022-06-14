
import * as React from 'react';
import { useParams } from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import rating from '../../composants/Rating/Rating';
import Carousel from '../../composants/Carousel/Carousel';



function Fiche_logement() {

  let test=0;
  const navigate = useNavigate();
  const urlcards=`/NoPage`;
 let htmltag='';
  let htmllistequi='';
  let htmlrat='';
 let html='';
 let htmlcarousel='';
  const id=useParams()
  logements.forEach((logement) => {
    if(id.id===logement.id)
            {   
              const intrating=parseInt(logement.rating);

              htmlrat=rating(intrating);

              htmltag=logement.tags.map((tagname)=><h3 className='tag'>{tagname}</h3>);
              htmllistequi=logement.equipments.map((equipment)=><li className='equipement'>{equipment}</li>);
              htmlcarousel=logement.pictures.map((image)=><img src={image} alt={image}></img>)
              test=1;
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
                            <div className='avatar'onClick={()=>navigate(urlcards)}>
                              <div className='hostname'>{logement.host.name}</div>
                                <img src={logement.host.picture} alt={logement.host.name}></img>
                                </div>{htmlrat}</div>
                          </section><section className='wrapperdescription'>
                      <Collapse name="description" description={logement.description}></Collapse>
                      <Collapse name="equipements" description={htmllistequi} ></Collapse>
                    </section></section>;
                    
                  };
        });
        useEffect(() => {
          navigate({
            goTo: '/NoPage',
            when: !test,
          })
        }, [navigate])
    return <>{html}</>;
  }
  export default Fiche_logement;