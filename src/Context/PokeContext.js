import { useState, createContext } from 'react';

export const PokeContext = createContext();

const initialDataPokemonImg = {
    back_default: "",
    front_default: ""
}

const PokeProvider = ({ children }) => {
    const [dataPokemon, setDataPokemon] = useState();
    const [selectColor, setSelectColor] = useState();
    const [selectPokemon, setSelectPokemon] = useState();
    const [selectImg, setSelectImg] = useState(initialDataPokemonImg);

    return (
        <PokeContext.Provider value={{ dataPokemon, setDataPokemon, selectColor, setSelectColor, selectPokemon, setSelectPokemon, selectImg, setSelectImg }}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider;