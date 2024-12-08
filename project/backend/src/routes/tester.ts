import express from "express";
import { db } from "../database/firebase";
import { collection, getDocs } from 'firebase/firestore';

const router = express.Router();

// this works
// needs auth to work now (firebase rules)
router.get('/testing', async (req, res) => {

    const dogCol = collection(db, 'Dog');
    const dogSnapshot = await getDocs(dogCol);
    const dogList = dogSnapshot.docs.map(doc => doc.data());

    res.send(dogList);
});

//Add user
router.post('/users', async (req, res) => {
    res.status(200).send('User added')
})

//Login user
router.post('/users/login', async (req, res) => {
    res.status(200).send('Logged in')
})

export default router;