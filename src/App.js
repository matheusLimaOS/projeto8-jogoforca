import { useState } from "react"
import Letras from "./Letras";

export default function App(){
    let [estado,setEstado] = useState(0);
    let imagem = `./assets/forca${estado}.png`
    let alfabeto1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    let alfabeto2 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    return (
        <div className="App">
            <div className='Forca'>
                <img src={imagem}  alt="Forca"/>
                <button onClick={()=>{estado === 6 ? setEstado(0) : setEstado(estado+1) } } className="escolher"> Escolher Palavra </button>
            </div>
            <div className="Letras1">
                {
                    alfabeto1.map((letra)=>{
                        return <Letras letra={letra}/>
                    })
                }
            </div>
            <div className="Letras2">
                {
                    alfabeto2.map((letra)=>{
                        return <Letras letra={letra}/>
                    })
                }
            </div>
            {/* <Chute/> */}
        </div>
    )
}