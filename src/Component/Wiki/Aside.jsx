import React, { useContext, useEffect } from "react";
import '../../App.css';
import { PokeContext } from "../../Context/PokeContext";
import pokeBallRed from '../../img/pokeBallRed.svg'
import pokeBallGreen from '../../img/pokeBallGreen.svg'
import pokeBallBlue from '../../img/pokeBallBlue.svg'
import pokeBallYellow from '../../img/pokeBallYellow.svg'

const Aside = () => {
    const { dataPokemon, setDataPokemon, selectColor, setSelectPokemon } = useContext(PokeContext);

    const pokeApi = async (selectColor = 'red') => {
        try {
            await fetch(`https://pokeapi.co/api/v2/pokemon-color/${selectColor}`)
                .then((response) => response.json())
                .then((data) => {
                    setDataPokemon(data.pokemon_species);
                })
        } catch (error) {
            console.error(error);
        }
    }

    const selectionPokemon = (e) => {
        setSelectPokemon(e.target.innerText);
    }

    useEffect(() => {
        pokeApi(selectColor);
        document.body.style.background = `${selectColor}`
    }, [selectColor]);

    return (
        <aside className="aside">
            <h2>Pokemons</h2>
            <nav>
                {
                    dataPokemon !== undefined ?
                        dataPokemon.map((pokemons) => {
                            return (
                                <li key={pokemons.name} className="pokeBall">
                                    <div>
                                        <img src={selectColor === 'red' ? pokeBallRed : selectColor === 'green' ? pokeBallGreen : selectColor === 'blue' ? pokeBallBlue : selectColor === 'yellow' ? pokeBallYellow : pokeBallRed} alt="" width="12px" />
                                    </div>
                                    <p onClick={selectionPokemon}>{pokemons.name}</p>
                                </li>
                            )
                        }) : ""
                }
            </nav>

        </aside >
    )
}

export default Aside;