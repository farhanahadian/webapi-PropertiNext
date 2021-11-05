'use strict';

// import { check } from "express-validator/check";
import Controller from '../controllers/profile/default'
import ActionsController from '../controllers/profile/actions'
import AdminController from '../controllers/manage/account'
import { Router } from 'express';
const router = Router();

router.get('/', Controller.index)
router.get('/me', Controller.get)
router.put('/me', Controller.update)
router.delete('/me', Controller.destroy)

// Manage
router.post('/password-reset', ActionsController.reset)
router.put('/manage/information', Controller.fillInformation)
router.put('/manage/password', Controller.changePassword)

// Actions
router.get('/action/listing', ActionsController.listings)
router.get('/action/books', ActionsController.books)
router.get('/action/rents', ActionsController.rents)
router.get('/action/buys', ActionsController.buys)
router.get('/action/favorites', ActionsController.favorites)
router.get('/action/bag/favorites', ActionsController.favoritesBags)
router.get('/action/discussions', ActionsController.discussions)
router.get('/action/recents', ActionsController.recents)
router.get('/action/recomendations', ActionsController.recomendations)

router.post('/action/rents', ActionsController.rent)
router.post('/action/buys', ActionsController.buy)
router.post('/action/discuss', ActionsController.discuss)
router.post('/action/favorites', ActionsController.favorite)
router.post('/action/recents', ActionsController.recent)
router.post('/action/prefers', ActionsController.prefer)

// Admin
router.get('/manage/get/:id', AdminController.get)
router.post('/manage/new', AdminController.save)
router.post('/manage/password-reset', ActionsController.reset)
router.put('/manage/user/:id', AdminController.editScope)

export default router
