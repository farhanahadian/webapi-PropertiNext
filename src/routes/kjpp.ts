'use strict'
import AdminController from '../controllers/manage/grid'
import Controller from '../controllers/estimation/request'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();

// Actions
router.get('/',Controller.all)
router.get('/:id',Controller.get)
router.post('/request',Controller.save)
// router.put('/request/:id',Controller.edit)
router.delete('/request/:id',Controller.delete)

export default router
