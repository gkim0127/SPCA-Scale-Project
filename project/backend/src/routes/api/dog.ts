import { Router } from "express";
import { db } from "../../database/firebase";

const router = Router();

//Dogs in location
router.get('/all/:locationId', async (req, res) => {
    try {
        const locationDocRef = db.collection('Location').doc(req.params.locationId);

        const dogRef = db.collection('Dog').where('location', '==', locationDocRef);

        const dogSnapshot = await dogRef.get();
        const dogList = dogSnapshot.docs.map(doc => {
            const { name, breed } = doc.data();
            const id = doc.id;
            return { id, name, breed }
        });

        res.send(JSON.stringify(dogList, null, 2));
    } catch(error) {
        // TODO proper error handling
        res.status(400);
    }
})

//All dogs
router.get('/all', async (req, res) => {
    try {
        const dogRef = db.collection('Dog');
        const dogSnapshot = await dogRef.get();
        const dogList = dogSnapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
        });

        res.send(JSON.stringify(dogList, null, 2));
    } catch(error) {
        // TODO proper error handling
        res.status(404)
    }
})

// Add dog
// Have location in body
router.post('/add/:locationId', async (req, res) => {
    try {
        const locId: string = req.params.locationId;
        const data = req.body;

        const locationDocRef = db.collection('Location').doc(locId);

        data.location = locationDocRef;

        await db.collection('Dog').add(data);
        res.send('Dog added');
        
    } catch(error) {
        // TODO proper error handling
        res.status(404)
    }
})

//Delete dog
router.delete('/:dogId/delete', async (req, res) => {
    try {
        const dogId = req.params.dogId;
        await db.collection("Dog").doc(dogId).delete();
        res.send('Dog data deleted');
    } catch(error) {
        // TODO proper error handling
        res.status(404)
    }
})

//Dog information
// location in body
router.get('/:dogId', async (req, res) => {
    try {
        const dogRef = db.collection('Dog').doc(req.params.dogId);
        const dogSnapshot = await dogRef.get();

        if (dogSnapshot.exists) {
            const dogData = dogSnapshot.data();
            // @ts-ignore
            const { location, ...filteredData } = dogData;
            const dogId = dogSnapshot.id;

            const locRef = location;
            const locDoc = await locRef.get();

            const {name, address} = locDoc.data();
            const id = locDoc.id;

            const locationData = {id, name, address};

            const weightRef = db.collection('Weight').where('dog', '==', dogRef);
            const weightSnapshot = await weightRef.get();

            const weightList = weightSnapshot.docs.map(doc => {
                const { weight, timestamp } = doc.data();
                const id = doc.id;
                return { id, weight, timestamp };
            });

            const dogWithId = { id: dogId, ...filteredData, locationData, weightList };
            res.send(JSON.stringify(dogWithId, null, 2));
        } else {
            res.status(404).send("Dog does not exist");
        }

    } catch(error) {
        // TODO proper error handling
        res.status(500);
    }
})

export default router;