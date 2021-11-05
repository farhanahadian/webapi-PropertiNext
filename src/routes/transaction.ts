'use strict';

import Controller from '../controllers/transaction/default'
import StatusController from '../controllers/transaction/status'
import ActionController from '../controllers/transaction/actions'
import { Router } from 'express'
import { validate } from '../util/utils'
import { BadRequestResponse } from '../util/response/Response'
import * as T from '../util/transaction/Status'
const router = Router();

const tValidate = (status?: string) => {
  return (req: any, res: any, next: any) => {
    const tId = req.params.id
    const tStatus = status
    console.log('content', tId, tStatus)
    if (tId) {
      req.t_id = tId
      req.t_status = tStatus
      next()
    } else {
      new BadRequestResponse('Transaction ID not valid').toResponse(res)
    }
  }
}

// Main
router.get('/', Controller.index)
router.get('/status', StatusController.index)

// router.get('/:id', Controller.get)
router.delete('/:id', Controller.destroy)
// // Transaction Status
router.post('/:id/create', tValidate(T.Status.CREATED), ActionController.template)
router.post('/:id/pending', tValidate(T.Status.PENDING), ActionController.template)
router.post('/:id/reserved', tValidate(T.Status.RESERVED), ActionController.template)
router.post('/:id/review', tValidate(T.Status.REVIEWED), ActionController.template)
router.post('/:id/confirmed', tValidate(T.Status.CONFIRMED), ActionController.template)
router.post('/:id/sold', tValidate(T.Status.COMPLETED), ActionController.template)
router.post('/:id/prepaid', tValidate(T.Status.PREPAID), ActionController.template)
router.post('/:id/closed', tValidate(T.Status.CLOSED), ActionController.template)

router.post('/:id/pay', tValidate(T.Payment.CREATED), ActionController.template)
router.post('/:id/escrow', tValidate(T.Escrow.CREATED), ActionController.template)
router.post('/:id/notary', tValidate(T.Notarie.CREATED), ActionController.template)
// Red Status
router.post('/:id/cancel', tValidate(T.Status.CANCELED), ActionController.template)
router.post('/:id/refund', tValidate(T.Status.REFUND), ActionController.template)

router.post('/:id/change', tValidate(), Controller.index)

export default router
