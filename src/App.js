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
    let [iniciou,setIniciou] = useState(false);
    let [finalizado,setFinalizado] = useState(false);
    let [acertou,setAcertou] = useState(false);

    console.log(palavra);

    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem} alt="Forca" />
                <div className="Direita">
                    <button onClick={() => handleOnClick(setEstado,setArrayTela,setPalavra,setDisabled,setIniciou,setFinalizado)} className="escolher"> Escolher Palavra </button>
                    <h1 className={(finalizado)  ? ((acertou) ? "palavra verde" : "palavra vermelho") : "palavra"}>{ArrayTela}</h1>
                </div>
            </div>
            <div className="Letras">
                {
                    alfabeto1.map((letra,indice) => {
                        return <Letras disabled={disabled} setDisabled={setDisabled} iniciou={iniciou} setIniciou={setIniciou} estado={estado} setEstado={setEstado} ArrayTela={ArrayTela} setArrayTela={setArrayTela} palavra={palavra} key={indice} letra={letra} setFinalizado={setFinalizado} setAcertou={setAcertou} />
                    })
                }
            </div>
            <Chute palavra={palavra} setArrayTela={setArrayTela} setAcertou={setAcertou} setFinalizado={setFinalizado} setDisabled={setDisabled} setEstado={setEstado} disabled={disabled}/> 
        </div>
    )
}
function handleOnClick(setEstado,setArrayTela,setPalavra,setDisabled,setIniciou,setFinalizado){
    setIniciou(true);
    setEstado(0);
    setDisabled(false);
    arrayNaTela(setArrayTela,randomizaPalavra(),setPalavra);
    setFinalizado(false);
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