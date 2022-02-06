import React from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className='contenido__App'>
                <h1>Pokedex</h1>
                <button onClick={() => navigate('/wiki')}>Enter</button>
            </div>
        </div>
    )
}

export default Home;