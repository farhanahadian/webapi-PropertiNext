'use strict'
import AdminController from '../controllers/manage/zone'
import Controller from '../controllers/mapping/zone'
import ExpoController from '../controllers/mapping/expo'
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
router.get('/dropdown', Controller.dropdown)
router.get('/data/:id', Controller.data)
router.get('/jabodetabek', Controller.jabodetabek)
router.get('/province', Controller.province)
router.get('/city/:provinceId?', Controller.city)
router.get('/district/:cityId?', Controller.district)
router.get('/province/:provinceId/cities/:cityId?', Controller.query)
router.get('/province/:provinceId/cities/:cityId/districts/:districtId?', Controller.query)
router.get('/:id', Controller.get)

/*
* Expo
* */
router.get('/expo/border', ExpoController.index)
router.get('/expo/project', ExpoController.project)
router.get('/expo/area', ExpoController.area)
router.get('/expo/unit', ExpoController.unit)
router.get('/expo/data', ExpoController.unitDataOld)
router.get('/expo/data/unit', ExpoController.unitData)
router.post('/expo/data/unit', ExpoController.unitData)
router.get('/expo/data/project', ExpoController.projectData)
router.get('/expo/data/project/:id/types', ExpoController.projectTypeData)

router.get('/apartment/siteplans', ExpoController.siteplans)
router.get('/apartment/units/:floor?', ExpoController.apartmentUnits)
router.get('/apartment/data/unit/:id?', ExpoController.apartmentUnitData)
router.get('/apartment/data/project', ExpoController.apartmentProjectData)
router.get('/apartment/data/floor/:id?', ExpoController.apartmentTypeData)
router.get('/apartment/data/:id/types', ExpoController.apartmentTypeData)

export default router
