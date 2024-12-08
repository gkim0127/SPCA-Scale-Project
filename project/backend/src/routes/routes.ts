import express from "express";
import dogRouter from "../routes/api/dog";
import userRouter from "../routes/api/user";
import locationRouter from "../routes/api/location";
import picoRouter from "../routes/api/pico";
import chatRouter from "../routes/api/chat"

const router = express.Router();

router.use(['/dogs', '/dog'], dogRouter);
router.use(['/user'], userRouter);
router.use(['/locations', '/location'], locationRouter);
router.use(['/pico'], picoRouter);
router.use(['/chat'], chatRouter);

export default router;