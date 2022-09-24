export default function Letras(props){
    return (
        <div className="Letra ">
            <button onClick={(e) => handleClick(e)} className="disabled" disabled={props.disabled} >{props.letra}</button>
        </div>
    )
}

function handleClick(e){
    console.log(e.target.outerText);
}