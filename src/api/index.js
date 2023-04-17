import { Router } from 'express'

import admin from './Admin'

import student from './Student'

const router = new Router();

router.use('/admin', admin)

router.use('/student', student)

export default router