import express from "express";
import {getMobiles, uploadNewMobile} from "../controllers/mobile.js"

const router = express.Router();

router.get('/', getMobiles)
router.post('/', uploadNewMobile)

export default router;