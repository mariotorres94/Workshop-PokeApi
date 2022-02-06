import React, { useContext } from "react";
import '../../App.css';
import pokeBallRed from '../../img/pokeBallRed.svg'
import pokeBallGreen from '../../img/pokeBallGreen.svg'
import pokeBallBlue from '../../img/pokeBallBlue.svg'
import pokeBallYellow from '../../img/pokeBallYellow.svg'
import { PokeContext } from "../../Context/PokeContext";

const Header = () => {

    const { setSelectColor } = useContext(PokeContext);

    const clickPokeball = (e) => {
        // console.log(e.target.alt)
        setSelectColor(e.target.alt);
    }

    return (
        <header className="header">
            <h1>Pokedex</h1>
            <div className="pokeballs">
                <img src={pokeBallRed} alt="red" onClick={clickPokeball} />
                <img src={pokeBallGreen} alt="green" onClick={clickPokeball} />
                <img src={pokeBallBlue} alt="blue" onClick={clickPokeball} />
                <img src={pokeBallYellow} alt="yellow" onClick={clickPokeball} />
            </div>
        </header>
    )
}

export default Header;