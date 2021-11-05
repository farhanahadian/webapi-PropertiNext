'use strict';
import Controller from '../controllers/property/default'
import ImageController from '../controllers/property/image'
import RentController from '../controllers/property/rent'
import ActionController from '../controllers/property/actions'
import { PropertyCreate, PropertyUpdate, PropertyImageCreate } from '../validations/Property'
import { RequestValidation, requiredAuth, optionalAuth } from '../util/middlewares'
import { Router } from 'express';

const router = Router();
const Multer = require('multer')
const multer = Multer({storage: Multer.memoryStorage()})

router.get('/', requiredAuth, Controller.index)
router.get('/:id', Controller.get)
router.post('/', requiredAuth, multer.array('images'), RequestValidation(PropertyCreate), Controller.save)
router.put('/', requiredAuth, RequestValidation(PropertyUpdate), Controller.save)
router.delete('/delete/:id?', requiredAuth, Controller.destroy)

/*
* Rent
* */
router.get('/:id/rent', RentController.get)
router.post('/:id/rent', RentController.save)
router.delete('/:id/rent', RentController.destroy)

/*
* Images
* */
router.post('/image/upload', multer.array('images'), ImageController.upload)
router.put('/image/upload/:id?', multer.single('image'), ImageController.update)
router.delete('/image/upload/:id', ImageController.destroy)
router.post(
  '/image', multer.single('image'),
  RequestValidation(PropertyImageCreate, (req: any) => {
    return {image: req.file};
  }),
  ImageController.create
);

/*
* Actions
* */
router.get('/account/stats', requiredAuth, ActionController.stats)
router.get('/account/stats/chart', requiredAuth, ActionController.chart)

/*
* Utils
* */
router.post('/util/estimator', ActionController.estimator)
router.post('/util/nearby', ActionController.nearbies)

export default router
