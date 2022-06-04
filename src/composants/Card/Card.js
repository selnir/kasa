import { useNavigate } from 'react-router';



function Card(props) {
  const navigate = useNavigate();
  const urlcards=`/Fiche_logement/${props.id}`;

    return <figure className='card'><button onClick={()=>navigate(urlcards)}><img src={props.img} alt={props.titre}></img><h3>{props.titre}</h3></button></figure>;
  }
  export default Card;