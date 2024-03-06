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
    description:string
}