import React from "react";
import counter from "./Counter";

const button = () => {
    return (

        <div className="bg-black d-flex justify-content-evenly">
         <button onClick={counter}>Reiniciar</button>
         <button class="btn btn-light">Detener</button>
         <button class="btn btn-light">Resumir</button>
        </div>
    )
}

export default button