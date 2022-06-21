import { Outlet, Link } from "react-router-dom";
import D_footer from "../D_footer/D_footer";
import Logo from "../Logo/Logo"



const Layout = () => {
  return (
   <> <section className="wrapper">
          <section className="header">

      <Logo></Logo>
      <nav>
        <ul>
          <li >
            <Link  to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/A_propos">A propos</Link>
          </li>
        </ul>
      </nav>
      </section>

      <Outlet />
    </section>      <D_footer></D_footer>
</>
  )
};

export default Layout;

