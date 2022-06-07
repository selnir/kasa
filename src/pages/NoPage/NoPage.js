import { useNavigate } from 'react-router';



function M_404() {
 
 
  const navigate = useNavigate();
  const urlcards=`/`;

  
    return <><section className="M404"><h1 className="Nofound">404</h1><h2 className="message">Oups! La page que vous demandez n'existe pas.</h2><figure className="retour" onClick={()=>navigate(urlcards)}>Retourner sur la page d’accueil</figure></section></>;
  }
  export default M_404;