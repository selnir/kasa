import { Outlet, Link } from "react-router-dom";
import D_footer from "../D_footer/D_footer";
import Logo from "../Logo/Logo"



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
        </ul>
      </nav>

      <Outlet />
      <D_footer></D_footer>
    </section>
  )
};

export default Layout;

