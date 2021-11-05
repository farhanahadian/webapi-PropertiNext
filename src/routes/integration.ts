'use strict'
// import AdminController from '../controllers/manage/grid'
import Controller from '../controllers/integration'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();

// Actions
router.post('/estimator', Controller.estimator)
router.post('/transaction', Controller.transaction)
router.post('/listing', Controller.listing)

router.get('/refs/ways', Controller.utilWays)

export default router
