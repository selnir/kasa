
import * as React from 'react'
import { useParams } from "react-router-dom";
// import {getArticle} from '../utils'





function Fiche_logement() {

  const id=useParams()
  
    return <><h2>Fiche_logement</h2><h2>{id.id}</h2></>;
    
  }
  export default Fiche_logement;