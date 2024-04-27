// @ts-expect-error akcsaalkjkcsjlajcaslkj
import paw from "../../assets/paw.png";
interface  Props{
    id:number;
}
export default function PawDivider(props:Props){
    const id = props.id
    return(
            <img className={"pawDividers"} style={{position:"absolute",top:(id%2===0?100:90)+"%",left:(id*8.7)+"%",zIndex:0,rotate:"40deg"}} src={paw} alt=""/>
    )
}