'use strict';

import Controller from '../controllers/index'
import PropertyRoutes from './property'
import WidgetRoutes from './widget'
import UnitRoutes from './unit'
import AccountRoutes from './account'
import OrganizationRoutes from './organization'
import TransactionRoutes from './transaction'
import ZoneRoutes from './zone'
import GridRoutes from './grid'
import DeveloperRoutes from './developer'
import IntegrationRoutes from './integration'
import CommercialRoutes from './commercial'
import EstimationRoutes from './kjpp'


import { requiredAuth, optionalAuth } from '../util/middlewares';
import { Router } from 'express';
const router = Router();

router.get('/', Controller.index)
router.use('/widget', WidgetRoutes)
router.use('/property', PropertyRoutes)
router.use('/account', requiredAuth, AccountRoutes)
router.use('/unit', optionalAuth, UnitRoutes)
router.use('/organization', OrganizationRoutes)
router.use('/transaction', TransactionRoutes)
router.use('/zone', ZoneRoutes)
router.use('/grid', GridRoutes)
router.use('/developer', DeveloperRoutes)
router.use('/integration', IntegrationRoutes)
router.use('/commercial', CommercialRoutes)
router.use('/kjpp', EstimationRoutes)


export default router
