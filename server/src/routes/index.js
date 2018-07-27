import { Router } from 'express';
import movieRouter from './movies';
import actorRouter from './actors';

let router = Router();

router.use('/movie', movieRouter);
router.use('/actor', actorRouter);

export default router;