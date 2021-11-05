'use strict'
// import AdminController from '../controllers/manage/grid'
import CommercialRequestController from '../controllers/commercial/request'
import CommercialOfferController from '../controllers/commercial/offer'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();

// Actions
router.get('/request', CommercialRequestController.all)
router.post('/request', CommercialRequestController.create)
router.post('/request/offer', CommercialRequestController.offer)
router.get('/request/:id', CommercialRequestController.show)
router.get('/request/:id/offers', CommercialRequestController.offers)
router.put('/request/:id', CommercialRequestController.edit)
router.delete('/request/:id', CommercialRequestController.remove)

router.get('/offer', CommercialOfferController.all)
router.post('/offer', CommercialOfferController.create)
router.post('/offer/accepted', CommercialOfferController.accepted)
router.post('/offer/archived', CommercialOfferController.archived)
router.get('/offer/:id', CommercialOfferController.show)
router.put('/offer/:id', CommercialOfferController.edit)
router.delete('/offer/:id', CommercialOfferController.remove)

export default router
