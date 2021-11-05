'use strict';

// import { check } from "express-validator/check";
import Controller from '../controllers/property/default'
import { Router } from 'express';
const router = Router();

router.get('/', Controller.index)

export default router
