import { useState } from "react"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras"

export default function App() {
    let [estado,setEstado] = useState(0);
    let imagem = `./assets/forca${estado}.png`
    let alfabeto1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let [disabled,setDisabled] = useState(true);
    let [palavra,setPalavra] = useState("");
    let [ArrayTela,setArrayTela] = useState();
    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem} alt="Forca" />
                <div className="Direita">
                    <button onClick={() => handleOnClick(setArrayTela,setPalavra,setDisabled)} disabled={!disabled} className="escolher"> Escolher Palavra </button>
                    <h1 className="palavra">{ArrayTela}</h1>
                </div>
            </div>
            <div className="Letras">
                {
                    alfabeto1.map((letra,indice) => {
                        return <Letras disabled={disabled} reinicia= {reinicia} estado={estado} setEstado={setEstado} ArrayTela={ArrayTela} setArrayTela={setArrayTela} palavra={palavra} key={indice} letra={letra} />
                    })
                }
            </div>
            <Chute palavra={palavra} setEstado={setEstado} disabled={disabled}/> 
        </div>
    )
}

function reinicia(setDisabled){
    setDisabled(true);
}

function handleOnClick(setArrayTela,setPalavra,setDisabled){
    setDisabled(false);
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