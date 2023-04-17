import { Router } from 'express'

import {
    studentlogin,
    profile,
    showstudentdata,
    downloadstudentdata,
    addstudentdata,
    deletestudentdata,
    editstudentdata,
    updatestudentdata,
    searchstudentdata,
    forgotPassword,
    changePassword

} from './controller'

const router = new Router();

router.get('/showstudentdata', showstudentdata);

router.get('/downloadstudentdata/:id', downloadstudentdata);

router.post('/addstudentdata', addstudentdata);

router.delete('/deletestudentdata/:id', deletestudentdata);

router.get('/editstudentdata/:id', editstudentdata);

router.put('/updatestudentdata/:id', updatestudentdata);

router.get('/studentlogin', studentlogin);

router.get('/searchstudentdata', searchstudentdata);

router.get('/profile', profile);

router.get('/forgotPassword', forgotPassword);

router.put('/changePassword/:id', changePassword);

export default router