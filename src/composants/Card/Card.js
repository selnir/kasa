import { useNavigate } from 'react-router';


function Card(props) {
  const navigate = useNavigate();
  const urlcards=`/Fiche_logement/${props.id}`;
  return <figure className='card' onClick={()=>navigate(urlcards)}><div className="image"><img src={props.img} alt={props.titre}></img></div><div className='titre'><h3>{props.titre}</h3></div>
  </figure>;
  }
  export default Card;