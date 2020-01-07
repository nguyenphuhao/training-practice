import express from 'express';
const router = express.Router();
import { AssetsRoutes } from "./AssetsRoutes";

router.use('/assets', AssetsRoutes());

export default router;