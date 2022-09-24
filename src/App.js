import { useState } from "react"
import Letras from "./Letras";
import Chute from "./Chute";

export default function App() {
    let [estado, setEstado] = useState(0);
    let imagem = `./assets/forca${estado}.png`
    let alfabeto1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem} alt="Forca" />
                <button onClick={() => { estado === 6 ? setEstado(0) : setEstado(estado + 1) }} className="escolher"> Escolher Palavra </button>
            </div>
            <div className="Letras">
                {
                    alfabeto1.map((letra) => {
                        return <Letras letra={letra} />
                    })
                }
            </div>
            <Chute/> 
        </div>
    )
}