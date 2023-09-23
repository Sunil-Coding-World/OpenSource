// routes/enrollmentRoutes.js
import express from "express";
import { addToEnroll, removeFromEnroll, fetchEnrollByUser } from '../controllers/enrollController.js';
const router = express.Router();

router.post('/enroll', addToEnroll);
router.delete('/enroll/:id/:courseId', removeFromEnroll ); 
router.get('/enroll/:id', fetchEnrollByUser);


export default router;