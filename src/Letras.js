import { useState } from "react";

export default function Letras(props){
    let [isDisabled,setIsDisabled] = useState(false)
    return (
        <div className="Letra ">
            <button 
                onClick={(e) => handleClick(e,props.palavra,setIsDisabled)} 
                className={(props.disabled === false && isDisabled === false) ? "letra" : "disabled"}
                disabled={(props.disabled === false && isDisabled === false) ? false : true} >
                    {props.letra}
            </button>
        </div>
    )
}

function handleClick(e,palavra,setIsDisabled){
    setIsDisabled(true)
    console.log(e.target.outerText);
}