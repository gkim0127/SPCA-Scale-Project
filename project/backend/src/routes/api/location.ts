import { Router } from "express";
import { db } from "../../database/firebase";

const router = Router();

//All locations
router.get('/', async (req, res) => {
    try {
        const locRef = db.collection('Location');
        const locSnapshot = await locRef.get();
        const locList = locSnapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
        });

        res.send(JSON.stringify(locList, null, 2));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

//Location information
router.get('/:locationId', async (req, res) => {
    try {
        const locRef = db.collection('Location').doc(req.params.locationId);
        const locSnapshot = await locRef.get();

        if (locSnapshot.exists) {
            const locData = locSnapshot.data();
            const locId = locSnapshot.id;
            const locWithId = { id: locId, ...locData };
            res.send(JSON.stringify(locWithId, null, 2));
        } else {
            res.status(404).send("Location does not exist");
        }
    } catch (error) {
        // TODO proper error handling
        res.status(500)
    }
});

export default router;