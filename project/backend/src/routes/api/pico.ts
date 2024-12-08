import { Router } from "express";
import { Timestamp } from "firebase-admin/firestore";
import { db } from "../../database/firebase";

const router = Router();

var dogId = "";

var previousWeight = "";

var tare = false;

//Reserve dog
router.get('/:dogId', async (req, res) => {
    try {
        const dogRef = db.collection('Dog').doc(req.params.dogId);
        const dogSnapshot = await dogRef.get();

        if (dogSnapshot.exists) {
            dogId = dogSnapshot.id;
            res.send("Dog reserved");
        } else {
            res.status(404).send("Dog does not exist");
        }
    } catch(error) {
        // TODO proper error handling
        res.status(500)
    }
})

// Add dog weight
router.get('/add/:weight', async (req, res) => {
    try {
        if (dogId != "") {
            if (tare) {
                const query = db.collection('Weight').orderBy('timestamp', 'desc').limit(1);

                const querySnapshot = await query.get();

                if (!querySnapshot.empty) {
                    const latestDoc = querySnapshot.docs[0];
                    const newWeight = parseFloat(req.params.weight) - parseFloat(previousWeight);

                    await latestDoc.ref.update({ weight: newWeight.toString() });

                    res.send('Weight updated successfully');

                    tare = false;
                } else {
                    res.status(404).send('No weight documents found in the collection');
                }
            } else {
                const weight: string = req.params.weight;

                const dogDocRef = db.collection('Dog').doc(dogId);

                const data = {
                    dog: dogDocRef,
                    weight: weight,
                    timestamp: Timestamp.now()
                };

                const weightRef = db.collection('Weight');

                await weightRef.add(data);
                res.send('Weight added');
            }

            dogId = "";
            previousWeight = "";
        } else {
            res.status(403).send('No dog reserved');
        }
    } catch (error) {
        // TODO proper error handling
        res.status(500).send('Error occurred');
    }
});

router.post('/tare', async (req, res) => {
    try {
        if (tare) {
            dogId = "";
            previousWeight = "";
            tare = false;

            res.send("Tare cleared");
        } else {
            tare = true;

            const query = db.collection('Weight').orderBy('timestamp', 'desc').limit(1);
            const querySnapshot = await query.get();

            if (querySnapshot) {
                const latestDoc = querySnapshot.docs[0];
                const {weight, dog} = latestDoc.data();
                previousWeight = weight;

                const dogRef = dog;
                const dogDoc = await dogRef.get();
                dogId = dogDoc.id;

                res.send('Tare successful');
            } else {
                res.status(500).send('Error finding latest weight');
            }
        }
    } catch (error) {
        // TODO proper error handling
        res.status(404)
    }
})

export default router;