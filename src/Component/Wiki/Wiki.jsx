import React from "react";
import Aside from "./Aside";
import DatosPokemon from "./DatosPokemon";
import Header from "./Header";

const Wiki = () => {
    return (
        <div className="selectbackground__color">
            <div className="wiki">
                <Header />
                <div className="container">
                    <Aside />
                    <DatosPokemon />
                </div>
            </div>
        </div>
    )
}

export default Wiki;