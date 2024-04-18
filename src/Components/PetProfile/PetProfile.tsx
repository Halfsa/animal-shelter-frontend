// @ts-expect-error cant find the pic for some reason
import empty from "../../assets/empty.jpg";
import GetBreedList from "../getBreedList.tsx";
import GetPet from "../getPet.tsx";
import adoptThisPet from "./adoptThisPet.ts";
import ValidateToken from "../../ValidateToken.tsx";
import {Box, Modal, Typography} from "@mui/material";
import { useRef, useState} from "react";
function PetProfile(){
    let petId:string = '-1';
   // const [imageSrc,setImageSrc] = useState('');
    const selectedPet = sessionStorage.getItem('selected-pet');
    const [open,setOpen] = useState(false)
    const [ modalMessage,setModalMessage] = useState("");
    const whatCode = useRef(200);
    const token = ValidateToken();
    const button = useRef<HTMLAnchorElement>(null);
    if (selectedPet !== null)
    {
        petId = (selectedPet);
    }
    if (petId === '-1'){
        return(
            <div>Baj van</div>
        );
    }
    const pet = GetPet(petId)
    const breeds = GetBreedList();
    const thisBreed = breeds.find((breed)=>{
        return breed.breedId === pet?.breedId;
    })
    const isBreedValid = thisBreed !== undefined && thisBreed !== null;
    async function startAdoption(){
        if (localStorage.getItem('access_token') !== null){
            const res = adoptThisPet(pet?.petId,token);
            console.log((await res).status);
            whatCode.current = (await res).status
            if ( whatCode.current !== 200){
                setModalMessage("Something went wrong while starting the adoption process. Please check if the pet you want to adopt is currently in our shelter.")
            }else {
                setModalMessage("Your adoption will be processed. If you do not get a reply within 3 workdays, you can contact us at: wuffshelter@shelter.com")
            }
            setOpen(true)
        }
        else {
            button.current?.click();
        }
    }
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return(
        <div className={"container-fluid petprofileBody p-0"}>
            <img alt={"selected animal's image"} className={"selectedImage"} src={pet? pet.imageUrls.length !==0?pet?.imageUrls[0]:empty:empty}/>
            <div className={"container selectedPet-content"}>
                <h2>{pet?.name}</h2>
                <p><b>sex: </b> {pet?.sex}</p>
                <p><b>breed: </b> {isBreedValid?thisBreed.name:"Breed unknown"}</p>
                <p id={"breedDescription"}>{isBreedValid? thisBreed.name+"'s are "+ thisBreed.description:"No description"}</p>
                <p><b>birthday: </b> {pet?.birthDate.slice(0,10)}</p>
                <p><q>{pet?.description}</q></p>
                <p id={"status"}><b>status: </b><span className={pet?.status}>{pet?.status === "INSHELTER"? "IN SHELTER":pet?.status}</span></p>
                <button className={"adoptButton btn btn-success"} onClick={startAdoption}>I want to adopt {pet?.name}</button>
                <a href={"/login"} style={{display: "none"}} ref={button}></a>
                <Modal
                    open={open}
                    onClose={()=>setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box  sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {whatCode.current === 200? "Success!": "Error!"}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {modalMessage}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
/*
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    </Typography>
                </Box>
            </Modal>*/
}
export default PetProfile;