import {LocationModel} from "./LocationModel";

class DogModel {
    name: string;
    weight: string[];
    dob: string;
    image: string;
    description: string;
    breed: string;
    ownerId: string;
    location: LocationModel;

    constructor(name: string, weight: string[], dob: string, image: string, description: string, breed: string, ownerId: string, location: LocationModel) {
        this.name = name
        this.weight = weight
        this.dob = dob
        this.image = image,
        this.description = description,
        this.breed = breed,
        this.ownerId = ownerId,
        this.location = location
    }
}

export { DogModel }