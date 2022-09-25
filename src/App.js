import { useState } from "react"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras"

export default function App() {
    let imagem = `./assets/forca${0}.png`
    let alfabeto1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let [disabled,SetDisabled] = useState(true);
    let [palavra,setPalavra] = useState("");
    let [ArrayTela,setArrayTela] = useState();
    //let array = [...palavra];
    
    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem} alt="Forca" />
                <div className="Direita">
                    <button onClick={() => handleOnClick(setArrayTela,setPalavra,SetDisabled)} disabled={!disabled} className="escolher"> Escolher Palavra </button>
                    <h1 className="palavra">{ArrayTela}</h1>
                </div>
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

function handleOnClick(setArrayTela,setPalavra,SetDisabled){
    SetDisabled(false);
    arrayNaTela(setArrayTela,randomizaPalavra(),setPalavra);
}

function randomizaPalavra(){
    palavras.sort(() => Math.random() - 0.5);

    return palavras[0];
}

function arrayNaTela(setArrayTela,palavra,setPalavra){
    let aux = [];
    for(let i = 0; i<palavra.length;i++){
        aux.push('_');
    }

    setArrayTela(aux);
    setPalavra(palavra)
}