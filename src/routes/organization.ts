'use strict';

// import { check } from "express-validator/check";
import Controller from '../controllers/organization/default'
import EmployeeController from '../controllers/organization/employee'
import AssignmentController from '../controllers/organization/assignment'
import { optionalAuth, requiredAuth } from '../util/middlewares'
import { Router } from 'express';
const router = Router();

router.get('/', Controller.index)
router.post('/', Controller.save)
router.put('/', Controller.save)
router.delete('/:id', Controller.destroy)
router.get('/:id', Controller.get)

router.get('/:id/employees', EmployeeController.index)
router.post('/:id/employee', EmployeeController.save)
router.put('/:id/employee', EmployeeController.save)
router.delete('/:id/employee/:itemId', EmployeeController.destroy)
router.get('/:id/employee/:itemId', EmployeeController.get)

router.get('/:id/assignments', AssignmentController.index)
router.post('/:id/assignment', AssignmentController.save)
router.put('/:id/assignment', AssignmentController.save)
router.delete('/:id/assignment/:itemId', AssignmentController.destroy)
router.get('/:id/assignment/:itemId', AssignmentController.get)

export default router
