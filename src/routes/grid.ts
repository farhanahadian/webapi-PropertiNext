'use strict'
import AdminController from '../controllers/manage/grid'
import Controller from '../controllers/mapping/grid'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();
const Multer = require('multer')
const multer = Multer({storage: Multer.memoryStorage()})

router.get('/manage/data', AdminController.data)
router.post('/manage/data/upload', multer.single('file'), AdminController.upload)
router.get('/manage/data/download', AdminController.download)
router.delete('/manage/data/:id', AdminController.remove)

router.get('/manage', AdminController.index)
router.get('/manage/:id', AdminController.get)
router.post('/manage', multer.single('file'), AdminController.save)
router.put('/manage', multer.single('file'), AdminController.save)
router.delete('/manage/:id', AdminController.destroy)

router.get('/', Controller.index)
router.post('/locate', Controller.locate)
router.post('/check', Controller.check)
router.get('/dropdown', Controller.dropdown)
router.post('/data', requiredAuth, Controller.input)
router.get('/view', Controller.view)
router.get('/data/:id', Controller.data)
router.get('/:id', Controller.get)

router.get('/geojson', Controller.geojson)

export default router
