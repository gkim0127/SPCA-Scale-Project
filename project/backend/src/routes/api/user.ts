import { Router } from "express";
import { db } from "../../database/firebase";
// import UserService from "../../services/userService";

const router = Router();

//User information
router.get('/:userId', async (req, res) => {
    try {
        const userRef = db.collection('User').doc(req.params.userId);
        const userSnapshot = await userRef.get();

        if (userSnapshot.exists) {
            // @ts-ignore
            const { location, username, type, admin } = userSnapshot.data();
            const userId = userSnapshot.id;

            const locRef = location;
            const locDoc = await locRef.get();

            if (locDoc.exists) {
                const {name, address} = locDoc.data();
                const id = locDoc.id;

                const location = {id, name, address};

                const userWithId = {userId, username, type, admin, location};
                res.send(JSON.stringify(userWithId, null, 2));
            }
        } else {
            res.status(404).send("Dog does not exist");
        }
    } catch (error) {
        // TODO proper error handling
        res.status(500)
    }
})

//Add user
router.post('/', (req, res) => {
    const {email, password} = req.body;
    // const idToken = await UserService.register(email, password);

    // console.log("route ", idToken);
    res.status(200).send('User added')
})

//Login user
router.post('/login', (req, res) => {
    const {email, password} = req.body;
    // UserService.login(email, password);
    res.status(200).send('Logged in')
})

//Logout user
router.get('/logout', (req, res) => {
    res.status(200).send('Logged out')
})

export default router;