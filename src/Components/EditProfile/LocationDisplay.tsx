import {Location, NewLocation} from "../../petDTO.tsx";
import React, {useRef, useState} from "react";
import addToLocation from "./addToLocation.ts";
import ValidateToken from "../../ValidateToken.tsx";

interface Props{
    location:Location;
    editable:boolean;
    makeMeDisappear?:()=>void;
}
function LocationDisplay(props:Props){
    const [country,setCountry] = useState<string>(props.location.country);
    const [state,setState] = useState<string|null>(props.location.state);
    const [city,setCity] = useState<string>(props.location.city);
    const [zipCode,setZipCode] = useState<string>(props.location.zipCode);
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
    async function addToMyLocation(){
        if (!country || !city || !zipCode || !address){
            alert("Please fill out all of the required fields")
            return;
        }
        const assembleLocation: NewLocation = {
            country:country.trim(),
            state:state?state.trim():null,
            city:city.trim(),
            zipCode:Number.parseInt(zipCode),
            address:address.trim(),
            addressExtra:addressExtra?addressExtra.trim():null
        }
        const addedLocation = await addToLocation(assembleLocation,tokenToSend);
        if (addedLocation.status !== 201){
            alert( addedLocation.data?.message[0])
            return;
        }
        else {
            return props.makeMeDisappear();
        }
    }
    const textareaStyles = !props.editable?"noSelect inputWithoutBorder":"";
    return(
        <div className={"locationDiv"}>
            <table className={"table table-borderless"}>
                <tbody>
                    <tr className={"row"}>
                        <td className={"col"}>country:{props.editable && <i title={"This field is required"} className={"required-field"}>*</i>}
                        </td>
                        <td className={"col"}>
                            <textarea name={"country"}
                                      autoComplete={"none"}
                                      className={ `textarea ${textareaStyles} ` }
                                      readOnly={!props.editable}
                                      value={country}
                                      onChange={onCountryChange}
                            />
                        </td>
                    </tr>
                    { props.editable || props.location.state && props.location.state?.trim().length !== 0 ?
                        <tr className={ "row" }>
                            <td className={"col"}>state:</td>
                            <td className={"col"}>
                                 <textarea name={"state"}
                                           autoComplete={"none"}
                                           readOnly={!props.editable}
                                           className={`textarea ${textareaStyles}`}
                                           value={state?state:undefined}
                                           onChange={onStateChange}
                                 />
                            </td>

                        </tr>:<></>
                    }
                    <tr className="row">
                        <td className={"col"}>city: {props.editable && <i title={"This field is required"} className={"required-field"}>*</i>}
                        </td>
                        <td className={"col"}>
                             <textarea name={"city"}
                                       autoComplete={"none"}
                                       readOnly={!props.editable}
                                       className={`textarea ${textareaStyles}`}
                                       onChange={onCityChange}
                                       value={city}
                             />
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>zipCode:{props.editable && <i title={"This field is required"} className={"required-field"}>*</i>}
                        </td>
                        <td className={"col"}>
                             <textarea name={"zipcode"}
                                       autoComplete={"none"}
                                       readOnly={!props.editable}
                                       ref={testarea}
                                       className={`textarea ${textareaStyles}`}
                                       value={zipCode}
                                       onChange={onZipCodeChange}
                             />
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>address:{props.editable && <i title={"This field is required"} className={"required-field"}>*</i>}
                        </td>
                        <td className={"col"}>
                             <textarea name={"address"}
                                       autoComplete={"none"}
                                       readOnly={!props.editable}
                                       className={`textarea ${textareaStyles}`}
                                       onChange={onAddressChange}
                                       value={address}
                             />
                        </td>
                    </tr>
                    { props.editable || props.location.addressExtra && props.location.addressExtra?.trim().length !== 0?
                        <tr className="row">
                            <td className={"col"}>extra:</td>
                            <td className={"col"}>
                             <textarea name={"addressExtra"}
                                       readOnly={!props.editable}
                                       autoComplete={"none"}
                                       className={`textarea ${textareaStyles}`}
                                       onChange={onAddressExtraChange}
                                       value={addressExtra?addressExtra:undefined}
                             />
                            </td>
                        </tr>:<></>
                    }
                    {props.editable&&
                        <tr className={"row"}>
                            <td className={"col"}>
                                <button onClick={()=>{ addToMyLocation()}}>Save</button>
                            </td>
                            <td className={"col"} style={{textAlign:"end",fontStyle:"italic",fontSize:12}}>
                                <p>
                                    fields with <i title={"This field is required"} className={"required-field"}>*</i> are required
                                </p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LocationDisplay