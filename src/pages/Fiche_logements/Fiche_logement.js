
import * as React from 'react';
import { useParams } from "react-router-dom";
import Collapse from "../../composants/Collapse/Collapse";
import logements from "../../logements.json" ;




function Fiche_logement() {

  let htmldescription='';
  let htmlequipement='';
  let htmltag='';
  let htmltitre='';
  // htmltag=<tagfiche name="hello"></tagfiche>;

  const id=useParams()
  logements.forEach((logement) => {
    if(id.id===logement.id)
            {
              htmltitre=<div>{logement.title}</div>;
              logement.tags.map((tagname)=> htmltag=<div>{tagname}</div>+htmltag);
              htmldescription=<Collapse name="description" description={logement.description} ></Collapse>;
              htmlequipement=<Collapse name="equipements" description={logement.equipments} ></Collapse>
            }
        });
    return <>{htmltitre}{htmltag}{htmldescription}{htmlequipement}</>;
  }
  export default Fiche_logement;