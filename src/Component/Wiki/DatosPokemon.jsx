import React, { useContext, useEffect } from "react";
import '../../App.css';
import { PokeContext } from "../../Context/PokeContext";

const DatosPokemon = () => {

    const { selectPokemon, selectImg, setSelectImg } = useContext(PokeContext);


    const pokeApiAllsPokemon = async (selectPokemon) => {
        try {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${selectPokemon}`)
                .then((response) => response.json())
                .then((data) => {
                    setSelectImg({
                        back_default: data.sprites.back_default,
                        front_default: data.sprites.front_default,
                        species: data.species.name,
                        type: data.types,
                        id: data.id
                    });
                })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (selectPokemon !== undefined) {
            pokeApiAllsPokemon(selectPokemon);
        }
    }, [selectPokemon])

    return (
        <div className="datos__pokemon">
            <div className="container__pokemon">
                <div className="img__back">
                    <img src={selectImg.back_default} alt="" />
                </div>
                <div className="img__front">
                    <img src={selectImg.front_default} alt="" />
                </div>
            </div>
            <h2>{selectImg.species}</h2>
            <ul>
                {
                    selectImg.type !== undefined ?
                        selectImg.type.map((ty) => {
                            return (
                                <li key={ty.type.name}>{ty.type.name}</li>
                            )
                        }) : ""
                }
            </ul>
        </div>
    )
}

export default DatosPokemon;