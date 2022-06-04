import React from "react";
import Card from "../../composants/Card/Card";
import logements from "../../logements.json"
import Banner from "../../composants/Banner/Banner"

function My_home() {
    return (<section className="My_home">

        <Banner></Banner>
            <section className="wrappcard">{logements.map(logement => (<Card id={logement.id} img={logement.cover} titre={logement.title}></Card>))}
          </section>
      </section>
    );
    }
    export default My_home;