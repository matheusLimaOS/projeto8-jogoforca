import { useState } from "react"

export default function Chute(props) {
   let [palpite,setPalpite] = useState("");
    return (
        <div className="chute">
            <form onSubmit={(e)=>{chute(e,palpite,props.palavra,setPalpite)}}>
                <label htmlFor="input"> Já sei a resposta</label>
                <input type="text" value={palpite} onChange={(e)=>handleChange(setPalpite,e.target.value)} className="input" />
                <button type="submit">Chutar</button>
            </form>
        </div>
    )
}

function chute(event,palpite,palavra,setPalpite){
    event.preventDefault();

    let palp = removeAcento(palpite)
    let pala = removeAcento(palavra);

    if(palp === pala){
        alert("acertou");
        setPalpite('');
    }
    else{
        alert("Errou")
        setPalpite('');
    }
}

function handleChange(setChute,value){
    setChute(value);
}

function removeAcento (text){       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}