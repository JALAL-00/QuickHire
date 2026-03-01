import { Router } from 'express';
import { createApplication } from '../controllers/applicationController';

const router = Router();

router.route('/').post(createApplication);

export default router;