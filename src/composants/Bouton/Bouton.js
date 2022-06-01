
import styles from './my-style.module.css'


function Bouton(props) {
    return <button className={styles.bouton}>{props.text}</button>;
  }
  export default Bouton;