import React from "react";
interface Props{
    onClick:(whatAreWeEditing:string)=>void;
}
function PlusButton(props:Props){
    return (
        <button className={"plusButton"} onClick={props.onClick}> + </button>
    )
}

export default PlusButton;