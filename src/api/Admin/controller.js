import university from '../Common/universityModel'
import courses from '../Common/courseModel'
import Admin from './adminModel'



export const addadmin = (req,res) => {
    Admin.create(req.body,(err, result) =>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });
}

export const adminlogin = (req, res) => {
    Admin.find({"username":req.query.username,"password":req.query.password},(err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const showUniversitydata = (req, res) => {
    university.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const showCourses = (req, res) => {
    courses.find({}).populate('university').exec((err, result) => {
        if (err){
            console.log(err,"check error");
            res.send(err);
        }
        else{
            const resp = result.map(data=>{
                // console.log(data,"check data");
            return {id:data._id, university:data.university,courseName:data.courseName,fee:data.fee,duration:data.duration}
        })
        res.send(resp);
        console.log(resp,"checkData");
        }
    })
}


export const addUniversitydata = (req, res) => {
    university.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}
export const addCoursesdata = (req, res) => {
    courses.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}

export const deleteUniversitydata = (req, res) => {
    university.findByIdAndRemove(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}
export const deleteCoursesdata = (req, res) => {
    courses.findByIdAndRemove(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}


export const editUniversitydata = (req, res) => {
    university.findById(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}
export const editCoursesdata = (req, res) => {
    courses.findById({"_id":req.params.id},).populate('university').exec((err, result) => {
        if (err){
            res.send(err);
        }
        else{
            const resp = [result].map(data=>{
            return {id:data._id,  university:data.university._id, university:data.university.universityName,  courseName:data.courseName,fee:data.fee,duration:data.duration}
        }) 
        res.send(resp);
        }
    })
}

export const updateUniversitydata = (req, res) => {
    university.findByIdAndUpdate({"_id":req.params.id}, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}
export const updateCoursesdata = (req, res) => {
    courses.findByIdAndUpdate({"_id":req.params.id}, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}
export const searchCourses = (req,res) => {
    courses.find({"courseName": req.query.courseName}).populate('university').exec((err,result) =>{
        if(err){
            res.send(err);
            console.log(err,"error");
        }else{
            res.send(result);
           console.log(result,"check res");
        }
    })
}