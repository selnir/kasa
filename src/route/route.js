import { BrowserRouter, Routes, Route } from "react-router-dom";
import A_propos from '../pages/A_propos/A_propos';
import My_home from '../pages/My_home/My_home';
import Layout from "../composants/Layout/Layout"
import NoPage from '../pages/NoPage/NoPage';
import Fiche_logement from '../pages/Fiche_logements/Fiche_logement';



const route=
<BrowserRouter key="RouterKasa">
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<My_home />} />
            <Route path="A_propos" element={<A_propos />} />
            <Route path="Fiche_logement/:id" element={<Fiche_logement/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
</BrowserRouter>  

export default [route];

