import {LocationModel} from "../models/LocationModel";
import {DogModel} from "../models/DogModel";

class DummyData {

    locations: LocationModel[];
    dogs: DogModel[];
    jsonLocations: string;
    jsonDogs: string;

    constructor() {
        const location1 = new LocationModel("SPCA Papakura", "123 Sesame Street");
        const location2 = new LocationModel("SPCA Botany", "4 Privot Drive");
        const location3 = new LocationModel("SPCA Hamilton", "21 Jump Street");

        this.locations = [location1, location2, location3];

        const dog1 = new DogModel("Mr 305", ["17.2", "16.9"], "7/8/2001", "This for everybody going through tough times\nBelieve me, been there, done that\nBut every day above ground is a great day, remember that", "This one ", "Pitbull", "Armando Perez", location1)
        const dog2 = new DogModel("Augh", ["17.2", "16.9", "17.0"], "7/8/2001", "This for everybody going through tough times\nBelieve me, been there, done that\nBut every day above ground is a great day, remember that", "This one ", "Pitbull", "Armando Perez", location2)
        const dog3 = new DogModel("Larry", ["17.2", "16.9", "17.0", "17.1"], "7/8/2001", "This for everybody going through tough times\nBelieve me, been there, done that\nBut every day above ground is a great day, remember that", "This one ", "Pitbull", "Armando Perez", location2)

        this.dogs = [dog1, dog2, dog3]

        this.jsonLocations = JSON.stringify(this.locations);
        this.jsonDogs = JSON.stringify(this.dogs);
    }
}

export { DummyData }