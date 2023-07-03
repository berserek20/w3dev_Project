import express from 'express';
import { docCreate, docDelete, docRead, docUpdate } from '../controller/crudcontroller';



const router = express.Router();

router.post('/',docCreate);

router.put('/',docUpdate);

router.get('/',docRead);

router.delete('/',docDelete);

export default router;