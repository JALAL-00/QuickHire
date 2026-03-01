import { Router } from 'express';
import { getJobs, getJobById, createJob, deleteJob } from '../controllers/jobController';

const router = Router();

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJobById).delete(deleteJob);

export default router;