import {Role, User} from "../petDTO.tsx";
import placeholderImg from "../assets/profile-icon.png"
import {Button} from "@mui/material";
import Popup from "reactjs-popup";
interface Props{
    user:User;
    addRoleToUser:(role:Role,id:string,rolesList:string[])=>void;
    removeRoleFromUser:(role:string,id:string,rolesList:string[])=>void;
    allRoles:Role[]
}
export default function ManageUsersDisplay(props:Props){
    const user = props.user;
    return(
        <div className={"manageUsersDisplay"}>
            <img height={100} width={100} src={user?.profileImageUrl? user?.profileImageUrl:placeholderImg} alt=""/>
            <div className={"manageUsersDisplayContent"}>
                <p>{user.username}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div className={"rolesContainer"}>
                {user.roles.map(role=>{
                    return(
                        <Button onClick={()=>props.removeRoleFromUser(role,user.userId,user.roles)} key={role} className={"roleDisplay"}>
                            {role}
                        </Button>
                    )
                })}

                <Popup trigger={<Button type={"button"}  className={"roleDisplay"}>+</Button>}>
                    <div style={{backgroundColor:"white", display:"flex",flexFlow:"column"}}>
                        {props.allRoles.map(role=>{
                            return(
                                <Button onClick={()=>{props.addRoleToUser(role,user.userId,user.roles)}} style={{color:"black"}} key={role.roleId} value={role.roleName}>
                                    {role.roleName}
                                </Button>
                            )
                        })}
                    </div>
                </Popup>
            </div>
        </div>
    )
}