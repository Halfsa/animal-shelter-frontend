import {useEffect, useRef, useState} from "react";
import {Role, User} from "../petDTO.tsx";
import axios from "axios";
import ValidateToken from "../ValidateToken.tsx";
import ManageUsersDisplay from "./ManageUsersDisplay.tsx";
import GetProfile from "../Components/getProfile.tsx";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import eventBus from "../EventBus.ts";

export default function ManageUsers(){
    const [users,setUsers] = useState<User[]>([])
    const tokenToSend = ValidateToken();
    const myUser = GetProfile()
    const [allRoles,setAllRoles] = useState<Role[]>([]);
    function GetAllUsers(){
        axios.get("/user",{headers:{
                Authorization: `Bearer ${tokenToSend}`
            }}).then(res=>{
            console.log(res)
            setUsers(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        GetAllUsers()
        GetAllRoles()
        eventBus.on("updateRoles",()=>{
            GetAllUsers()
        })
        return()=>{
            eventBus.remove("updateRoles",()=>{})
        }
    }, []);

    function removeRoleFromUser(deletableRole:string,id:string,roleList:string[]){
        if (deletableRole === "USER"||id === myUser?.userId){
            return;
        }
        const updatedRoles = roleList.filter(role=>{
            return role !== deletableRole
        })
        axios.put(`/user/${id}`,{
            "roles": updatedRoles
        },{headers:{
            Authorization:`Bearer ${tokenToSend}`
            }}).then(res=>{
                console.log(res);
                eventBus.dispatch("updateRoles","");
        }).catch(err=>{
            console.log(err);
        })
    }
    function addRoleToUser(role:Role,id:string,roleList:string[]){
        if (roleList.includes(role.roleName)){
            alert("user already has this role")
        }
        const updatedRoles = roleList
        updatedRoles.push(role.roleName);
        axios.put(`/user/${id}`,{
            "roles": updatedRoles
        },{headers:{
                Authorization:`Bearer ${tokenToSend}`
            }}).then(res=>{
            console.log(res);
            eventBus.dispatch("updateRoles","")
        }).catch(err=>{
            console.log(err)
        })
    }

    function GetAllRoles() {
            axios.get("/role", {
                headers: {
                    Authorization: `Bearer ${tokenToSend}`
                }
            }).then(res=>{
                console.log(res.data)
                setAllRoles(res.data)
            }).catch(err=>{
                console.log(err)
        })
    }
    return(
        <div className={"manageUsersBody"}>
            {users.map(user=>{
                return(
                    <ManageUsersDisplay
                        key={user.userId}
                        user={user}
                        removeRoleFromUser={removeRoleFromUser}
                        addRoleToUser={addRoleToUser}
                        allRoles={allRoles}/>
                )
            })}
        </div>
    )
}