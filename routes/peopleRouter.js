import express from 'express';
import controller from '../controllers/peopleController.js';

const router = express.Router();

router.get("/people/:id", controller.getPeopleById);

export default router;