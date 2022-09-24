import { useState } from "react"

export default function Chute() {
   let [valor,setValor] = useState("");
    return (
        <div className="chute">
            <form onSubmit={(e)=>{chute(e,valor,setValor)}}>
                <label htmlFor="input">Já sei a resposta</label>
                <input type="text" className="input" />
                <button type="submit">Chutar</button>
            </form>
        </div>
    )
}

function chute(event,valor,setValor){
    event.preventDefault();

    setValor(event.target[0].value);
}