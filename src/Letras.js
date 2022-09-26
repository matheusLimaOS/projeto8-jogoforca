import { useState } from "react";

export default function Letras(props){
    let [isDisabled,setIsDisabled] = useState(false)
    return (
        <div className="Letra ">
            <button 
                onClick={(e) => handleClick(e,props.palavra,setIsDisabled,props.ArrayTela,props.setArrayTela,props.estado,props.setEstado)} 
                className={(props.disabled === false && isDisabled === false) ? "letra" : "disabled"}
                disabled={(props.disabled === false && isDisabled === false) ? false : true} >
                    {props.letra}
            </button>
        </div>
    )
}

function handleClick(e,palavra,setIsDisabled,ArrayTela,setArrayTela,estado,setEstado){
    let semAcento = removeAcento(palavra);
    let arr = [...palavra];
    let arr2 = [...semAcento];
    let aux = [];
    let cont = 0;

    for(let i=0;i<palavra.length;i++){
        if(arr2[i].toUpperCase() === e.target.outerText){
            aux.push(arr[i]);
            cont++;
        }
        else{
            aux.push(ArrayTela[i]);
        }
    }
    if(cont===0){
        let a = estado + 1;

        if(a===6){
            setEstado(6);
            alert("Você Perdeu !!!")
        }
        else{
            setEstado(a);
        }
    }
    verificaVitoria(aux);
    setArrayTela(aux);
    setIsDisabled(true)
    
}

function verificaVitoria(aux){
    if(aux.includes('_')===false){
        alert("Você Ganhou !!!");
    }
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