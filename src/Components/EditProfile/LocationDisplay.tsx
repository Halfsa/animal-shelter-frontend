import {Location, NewLocation} from "../../petDTO.tsx";
import React, {useRef, useState} from "react";
import addToLocation from "./addToLocation.ts";
import ValidateToken from "../../ValidateToken.tsx";

interface Props{
    location:Location;
}
function LocationDisplay(props:Props){
    const [country,setCountry] = useState<string>(props.location.country);
    const [state,setState] = useState<string|null>(props.location.state);
    const [city,setCity] = useState<string>(props.location.city);
    const [zipCode,setZipCode] = useState<number>(props.location.zipCode);
    const [address,setAddress] = useState<string>(props.location.address);
    const [addressExtra,setAddressExtra] = useState<string|null>(props.location.addressExtra);
    const testarea = useRef<HTMLTextAreaElement>(null);
    const tokenToSend = ValidateToken();
    function onCountryChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCountry(e.target.value)
    }function onStateChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setState(e.target.value);
    }function onCityChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCity(e.target.value);
    }function onZipCodeChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setZipCode(e.target.value)
    }function onAddressChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setAddress(e.target.value);
    }function onAddressExtraChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setAddressExtra(e.target.value);
    }
    function addToMyLocation(){
        const assembleLocation: NewLocation = {
            country:country,
            state:state,
            city:city,
            zipCode:zipCode,
            address:address,
            addressExtra:addressExtra
        }
        addToLocation(assembleLocation,tokenToSend)
    }
    return(
        <div className={"locationDiv"}>
            <button onClick={addToMyLocation}>
                save
            </button>
            <table className={"table table-borderless"}>
                <tbody>
                    <tr className={"row"}>
                        <td className={"col"}>country:</td>
                        <td className={"col"}>
                            <textarea name={"country"}
                                      className={ "textarea noSelect inputWithoutBorder" }
                                      readOnly={false}
                                      value={country}
                                      onChange={onCountryChange}
                            />
                        </td>
                    </tr>
                    { props.location.state &&
                        <tr className={ "row" }>
                            <td className={ "col" }>state (optional):</td>
                            <td className={"col"}>
                                 <textarea name={"state"}
                                           readOnly={false}
                                           className={"textarea noSelect inputWithoutBorder"}
                                           value={state?state:undefined}
                                           onChange={onStateChange}
                                 />
                            </td>

                        </tr>
                    }
                    <tr className="row">
                        <td className={"col"}>city:</td>
                        <td className={"col"}>
                             <textarea name={"city"}
                                       readOnly={false}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       onChange={onCityChange}
                                       value={city}
                             />
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>zipCode:</td>
                        <td className={"col"}>
                             <textarea name={"zipcode"}
                                       readOnly={false}
                                       ref={testarea}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       value={zipCode}
                                       onChange={onZipCodeChange}
                             />
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>address:</td>
                        <td className={"col"}>
                             <textarea name={"address"}
                                       readOnly={false}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       onChange={onAddressChange}
                                       value={address}
                             />
                        </td>
                    </tr>
                    {props.location.state &&
                        <tr className="row">
                            <td className={"col"}>extra:</td>
                            <td className={"col"}>
                             <textarea name={"addressExtra"}
                                       readOnly={false}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       onChange={onAddressExtraChange}
                                       value={addressExtra?addressExtra:undefined}
                             />
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LocationDisplay