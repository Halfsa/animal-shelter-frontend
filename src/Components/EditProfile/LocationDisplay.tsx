import {Location} from "../../petDTO.tsx";

interface Props{
    location:Location;
}
function LocationDisplay(props:Props){
    return(
        <div className={"locationDiv"}>
            <table className={"table table-borderless"}>
                <tbody>
                    <tr className={"row"}>
                        <td className={"col"}>country:</td>
                        <td className={"col"}>
                            <textarea name={"country"} readOnly={true} className={ "textarea noSelect inputWithoutBorder" }
                                      defaultValue={ props.location.country }/>
                        </td>
                    </tr>
                    { props.location.state &&
                        <tr className={ "row" }>
                            <td className={ "col" }>state:</td>
                            <td className={"col"}>
                                 <textarea name={"country"} readOnly={true}
                                           className={"textarea noSelect inputWithoutBorder"}
                                           defaultValue={props.location.state}/>
                            </td>

                        </tr>
                    }
                    <tr className="row">
                        <td className={"col"}>city:</td>
                        <td className={"col"}>
                             <textarea name={"country"} readOnly={true}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       defaultValue={props.location.city}/>
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>zipCode:</td>
                        <td className={"col"}>
                             <textarea name={"country"}
                                       readOnly={true}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       defaultValue={props.location.zipCode}/>
                        </td>

                    </tr>
                    <tr className="row">
                        <td className={"col"}>address:</td>
                        <td className={"col"}>
                             <textarea name={"country"} readOnly={true}
                                       className={"textarea noSelect inputWithoutBorder"}
                                       defaultValue={props.location.address}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LocationDisplay