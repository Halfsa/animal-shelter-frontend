import axios from "axios";


    const uploadFile = async (image:FormData,tokenToSend:string|null): Promise<string>=> {
        console.log(image)
        return await axios.post ( '/media',
            image,
            {headers: {
                'Content-Type': 'image/png',
                Authorization:`Bearer ${tokenToSend}`
            }} ).then ( (data) => {
                console.log ( data.data.url );
                return data.data.url;
            }
        ).catch ( err => {
            console.log ( err )
            console.log ( err.message )
            return err.message;
        } )
    }
export default uploadFile