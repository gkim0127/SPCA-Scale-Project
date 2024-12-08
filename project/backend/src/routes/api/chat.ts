import { Router } from "express";
import { db } from "../../database/firebase";

const router = Router();

//Get messages
router.get('/get', async (req, res) => {
    const data = req.body;

    const user1Ref = db.collection("User").doc(data.user1);
    const user2Ref = db.collection("User").doc(data.user2);

    const queryRef1 = db.collection("Messages").where("sender", "==", user1Ref).where("receiver", "==", user2Ref);
    const queryRef2 = db.collection("Messages").where("sender", "==", user2Ref).where("receiver", "==", user1Ref);

    const querySnapshot1 = await queryRef1.get();
    const querySnapshot2 = await queryRef2.get();

    const messageSnapshot = querySnapshot1.docs.concat(querySnapshot2.docs);
    const messageList = messageSnapshot.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
    });

    res.send(JSON.stringify(messageList, null, 2));
})

//Add chat message
router.post('/add', async (req, res) => {
    try {
        const data = req.body;

        const chatRef = db.collection("Messages");
        const user1Ref = db.collection("User").doc(data.sender);
        const user2Ref = db.collection("User").doc(data.receiver);

        data.sender = user1Ref;
        data.receiver = user2Ref;

        await chatRef.add(data);
        res.send('Message added');

    } catch (error) {
        // TODO proper error handling
        res.status(404)
    }
})

//Clear chat after time
router.delete('/clear', async (req, res) => {
    try {
        const data = req.body;

        const user1Ref = db.collection("User").doc(data.user1);
        const user2Ref = db.collection("User").doc(data.user2);

        const queryRef1 = db.collection("Messages").where("sender", "==", user1Ref).where("receiver", "==", user2Ref);
        const queryRef2 = db.collection("Messages").where("sender", "==", user2Ref).where("receiver", "==", user1Ref);

        const querySnapshot1 = await queryRef1.get();
        const querySnapshot2 = await queryRef2.get();

        // Delete documents from querySnapshot1
        for (const doc of querySnapshot1.docs) {
            await doc.ref.delete();
        }

        // Delete documents from querySnapshot2
        for (const doc of querySnapshot2.docs) {
            await doc.ref.delete();
        }

        res.send("Messages deleted successfully.");
    } catch(error) {
        // TODO proper error handling
        res.status(404)
    }
})

export default router;