import express from 'express';
import { fetch, create, update, deleteUser} from '../controller/usercontroller.js';
//import { deleteModel } from 'mongoose';
const router = express.Router();

router.post('/create',create);
router.get('/fetch',fetch);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteUser);

export default router;