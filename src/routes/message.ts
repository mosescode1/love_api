import {Router} from "express";
import messageHandler from "../handlers/message.handler";

const router = Router();
router.post("/messages", messageHandler.CreateMessage as any)
router.get("/messages",messageHandler.GetRandomMessage as any)


export default router;