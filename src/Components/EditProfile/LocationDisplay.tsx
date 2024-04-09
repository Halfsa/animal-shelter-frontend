import {Location} from "../../petDTO.tsx";

interface Props{
    location:Location;
}
function LocationDisplay(props:Props){
    return(
        <div className={"locationDiv"}>
            <div className={"row"}>
                <p className={"col"}>country:</p>
                <input className={"col inputWithoutBorder"} type={"text"} defaultValue={props.location.country}/>
            </div>
            <div className={"row"}>
                <p className={"col"}>state:</p>
                <input className={"col inputWithoutBorder"} type={"text"} defaultValue={props.location.state ? props.location.state : "No state added"}/>
            </div>
            <div className="row">
                <p className={"col inputWithoutBorder"}>city:</p> <input className={"col"} type={"text"} defaultValue={props.location.city}/>
            </div>
            <div className="row">
                <p className={"col inputWithoutBorder"}>zipCode:</p> <input className={"col"} type={"text"} defaultValue={props.location.zipCode}/>
            </div>
            <div className="row">
                <p className={"col inputWithoutBorder"}>address:</p> <input className={"col"} type={"text"} defaultValue={props.location.address}/>
            </div>
        </div>
    )
}

export default LocationDisplay