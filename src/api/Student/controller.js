import registration from '../Common/StudentRegModel'
import {sendEmail} from '../Common/email'



export const studentlogin = (req, res) => {
    registration.findOne({"email":req.query.email,"password":req.query.password},(err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const profile = (req, res) => {
    registration.findOne({"email":req.query.email},(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const showstudentdata = (req, res) => {
    registration.find((err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const forgotPassword = (req, res) => {
    registration.findOne({"email":req.query.email},(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            const subject = 'File Received';
            const body = `You Received a File from online course finder<br><br>Student Name: ${result.firstName}&nbsp;${result.lastName}<br>Password: ${result.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.query.email, subject, body);
            res.send(result);
        }
    })
}

export const changePassword = (req, res) => {
    registration.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            const subject = 'File Received';
            const body = `You Received a File from online course finder<br><br>Student Name: ${req.body.email}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const downloadstudentdata = (req, res) => {
    registration.findById(req.params.id, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}


export const addstudentdata = (req, res) => {
    registration.create(req.body, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            const subject = 'File Received';
            const body = `You Received a File from Librarian<br><br>Student Email Id: ${req.body.email}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}



export const deletestudentdata = (req, res) => {
    registration.findByIdAndRemove(req.params.id, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
        res.send(result);
        }
    })
}

export const editstudentdata = (req, res) => {
    registration.findById(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
        res.send(result);
    })
}


export const updatestudentdata = (req, res) => {
    registration.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, result) => {
        if (err){
            res.send(err);
        }
        else{
        res.send(result);
        }
    })
}

export const searchstudentdata = (req, res) => {
    registration.find({ "firstName": req.query.firstName }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}