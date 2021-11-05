'use strict';

// import { check } from "express-validator/check";
import Controller from '../controllers/widget'
import { optionalAuth, requiredAuth } from '../util/middlewares'
import { Router } from 'express';
const router = Router();

router.get('/highlight', Controller.highlights)
router.get('/promos', optionalAuth, Controller.promos)
router.get('/popular10', Controller.populars)
router.get('/latest10', Controller.latests)
router.get('/cities10', Controller.cities)
router.get('/recomendation10', optionalAuth, Controller.recomendations)
router.post('/estimate', optionalAuth, Controller.estimate)
router.post('/estimate-request', optionalAuth, Controller.estimateRequest)
router.get('/value-estimator-request-data', requiredAuth, Controller.estimateRequestData)

export default router
