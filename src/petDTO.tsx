export interface Pet{
    birthDate: string,
    breedId: string,
    description: string,
    imageUrls: string[],
    name:string,
    petId:string,
    sex:string,
    status:string,
}
export interface Breed{
    breedId: string,
    name:string,
    description:string,
    speciesId:string,
}
export interface Species{
    speciesId:string,
    name:string,
    description:string,
}
export interface User{
    username:string,
    profileImageUrl:string|null,
    name:string,
    email:string,
}
export interface UpdateUser{
    username:string,
    profileImageUrl:string|null,
    name:string,
    email:string,
}
export interface Location{
    locationId:string,
    name:string,
    country:string,
    state:string|null,
    city:string,
    zipCode:number,
    address:string,
    addressExtra:string|null,
}