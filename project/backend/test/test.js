// this is a temporary file
// folder structure of ./test might change

import { describe } from 'node:test'
import db from '../src/database/firebase'

describe("Firestore Collection test", function () {
    it("get collection documents", async () => {
        let dogData = await db.getDogs();
        console.log(dogData);
    })
})