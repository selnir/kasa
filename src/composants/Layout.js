import { Outlet, Link } from "react-router-dom";
import Logo from "../composants/Logo/Logo";

import D_footer from "./D_footer";


const Layout = () => {
  return (
    <section>
      <Logo></Logo>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/A_propos">A propos</Link>
          </li>
          <li>
            <Link to="/Fiche_logement">Fiche_logement</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <D_footer></D_footer>
    </section>
  )
};

export default Layout;

