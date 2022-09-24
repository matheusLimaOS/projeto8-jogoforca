import { useState } from "react"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras"

export default function App() {
    let [estado, setEstado] = useState(0);
    let imagem = `./assets/forca${estado}.png`
    let alfabeto1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let [disabled,SetDisabled] = useState(true);
    let [palavra,setPalavra] = useState("");
    console.log(palavra)
    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem} alt="Forca" />
                <button onClick={() => handleOnClick(setPalavra,SetDisabled)} disabled={!disabled} className="escolher"> Escolher Palavra </button>
            </div>
            <div className="Letras">
                {
                    alfabeto1.map((letra,indice) => {
                        return <Letras disabled={disabled} key={indice} letra={letra} />
                    })
                }
            </div>
            <Chute palavra={palavra} disabled={disabled}/> 
        </div>
    )
}

function handleOnClick(setPalavra,SetDisabled,){
    setPalavra(randomizaPalavra());
    SetDisabled(false);
}

function randomizaPalavra(){
    palavras.sort(() => Math.random() - 0.5);

    return "água"//palavras[0];
}