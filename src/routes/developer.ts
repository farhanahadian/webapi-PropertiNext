'use strict'
// import AdminController from '../controllers/manage/grid'
import Controller from '../controllers/mapping/developer'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();

router.get('/', Controller.index)
router.get('/index.geojson', Controller.geojson)
router.post('/', Controller.get)

export default router
