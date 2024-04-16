import {Location, NewLocation} from "../../petDTO.tsx";
import React, {useRef, useState} from "react";
import addToLocation from "./addToLocation.ts";
import ValidateToken from "../../ValidateToken.tsx";

interface Props{
    location:Location;
    countryRef: React.RefObject<HTMLTextAreaElement>
}
function LocationDisplay(props:Props){
    const [country,setCountry] = useState<string>(props.location.country);
    const [state,setState] = useState<string|null>(props.location.state);
    const [city,setCity] = useState<string>(props.location.city);
    const [zipCode,setZipCode] = useState<number>(props.location.zipCode);
    const [address,setAddress] = useState<string>(props.location.address);
    const [addressExtra,setAddressExtra] = useState<string|null>(props.location.addressExtra);
    const testarea = useRef<HTMLTextAreaElement>(null);
    const [isReadOnly,setIsReadOnly] = useState(true);
    const tokenToSend = ValidateToken();
    function onCountryChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCountry(e.target.value)
    }function onStateChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setState(e.target.value);
    }function onCityChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCity(e.target.value);
    }function onZipCodeChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        const parsedZip = Number.parseInt(e.target.value);
        setZipCode(parsedZip)
    }function onAddressChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setAddress(e.target.value);
    }function onAddressExtraChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setAddressExtra(e.target.value);
    }
    function addToMyLocation(){
        const assembleLocation: NewLocation = {
            country:country.trim(),
            state:state?state.trim():null,
            city:city.trim(),
            zipCode:zipCode,
            address:address.trim(),
            addressExtra:addressExtra?addressExtra.trim():null
        }
        const addedLocation = addToLocation(assembleLocation,tokenToSend);
    }
    return(
        <div className={"locationDiv"}>
            <table className={"table table-borderless"}>
                <tbody>
                    <tr className={"row"}>
                        <td className={"col"}>country:</td>
                        <td className={"col"}>
                            <textarea name={"country"}
                                      ref={props.countryRef}
                                      autoComplete={"none"}
                                      className={ "textarea noSelect inputWithoutBorder" }
                                      readOnly={isReadOnly}
                                      value={country}
                                      onChange={onCountryChange}
                            />
                        </td>
                    </tr>
                    { props.location.state && props.location.state?.trim().length !== 0 &&
                        <tr className={ "row" }>
                            <td className={ "col" }>state (optional):</td>
                            <td className={"col"}>
                                 <textarea name={"state"}
                                           autoComplete={"none"}
                                           readOnly={isReadOnly}
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
                                       autoComplete={"none"}
                                       readOnly={isReadOnly}
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
                                       autoComplete={"none"}
                                       readOnly={isReadOnly}
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
                                       autoComplete={"none"}
                                       readOnly={isReadOnly}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       onChange={onAddressChange}
                                       value={address}
                             />
                        </td>
                    </tr>
                    {props.location.addressExtra && props.location.addressExtra?.trim().length !== 0&&
                        <tr className="row">
                            <td className={"col"}>extra:</td>
                            <td className={"col"}>
                             <textarea name={"addressExtra"}
                                       readOnly={isReadOnly}
                                       autoComplete={"none"}
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