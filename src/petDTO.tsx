export interface Pet{
    birthDate: string,
    breedId: number,
    description: string,
    imageUrl: URL,
    name:string,
    petId:number,
    sex:string,
    status:string,
}
export interface Breed{
    breedId: number,
    name:string,
    description:string,
    speciesId:number,
}
export interface Species{
    speciesId:number,
    name:string,
    description:string,
}
export interface User{
    username:string,
    name:string,
    email:string,
}
export interface Location{
    name:string,
    country:string,
    state:string|null,
    city:string,
    zipCode:number,
    address:string,
    addressExtra:string|null,
}