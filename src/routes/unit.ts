'use strict'
import Controller from '../controllers/unit'
import AccountController from '../controllers/profile/actions'
import { Router } from 'express';
import { optionalAuth, requiredAuth } from '../util/middlewares';
const router = Router();

router.get('/all', Controller.index)
router.get('/rents', Controller.rentes)
router.post('/search', Controller.search)
router.get('/list', Controller.list)
router.post('/trends', Controller.trendsByLatLng)
router.post('/find/text', Controller.list)
router.post('/find/map', Controller.bbox)
router.post('/find/marker', Controller.marker)
router.get('/show/:itemId', Controller.show)

router.get('/:id', optionalAuth, Controller.track((x: any) => x.params.id), Controller.get)
router.get('/:id/images', Controller.images)
router.get('/:id/description', Controller.description)
router.get('/:id/stats', Controller.stats)
router.get('/:id/favorites', Controller.favorites)
router.get('/:id/discussions', optionalAuth, Controller.discussions)
router.post('/:id/discussions', requiredAuth, AccountController.discuss)
router.get('/:id/discussion/:itemId', optionalAuth, Controller.discussion)
router.delete('/:id/discussion/:itemId', requiredAuth, Controller.discussion)
router.get('/:id/rent', Controller.rent)
router.get('/:id/nearby', Controller.nearby)
router.get('/:id/facilities', Controller.facilities)

export default router
