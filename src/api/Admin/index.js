import { Router } from 'express'

import {
    adminlogin,
    addadmin,
    showCourses,
    showUniversitydata,
    addCoursesdata,
    addUniversitydata,
    deleteCoursesdata,
    deleteUniversitydata,
    editCoursesdata,
    editUniversitydata,
    updateCoursesdata,
    updateUniversitydata,
    searchCourses

} from './controller'

const router = new Router();

router.get('/showCourses', showCourses);

router.post('/AddAdmin',addadmin);

router.get('/adminlogin', adminlogin);

router.get('/showUniversitydata', showUniversitydata);

router.post('/addCoursesdata', addCoursesdata);

router.post('/addUniversitydata', addUniversitydata);

router.delete('/deleteCoursesdata/:id', deleteCoursesdata);

router.delete('/deleteUniversitydata/:id', deleteUniversitydata);

router.get('/editCoursesdata/:id', editCoursesdata);

router.get('/editUniversitydata/:id', editUniversitydata);

router.put('/updateCoursesdata/:id', updateCoursesdata);

router.put('/updateUniversitydata/:id', updateUniversitydata);

router.get('/searchUniversity', searchCourses);

export default router