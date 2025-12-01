import express from 'express'
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "@repo/backend-common/config"

const app = express();

app.post('/signin', (req, res) => {

})

app.post('/signup', (req, res) => {
    const {userId, name} = req.body;

    const token = jwt.sign({userId}, JWT_SECRET)
})

app.post('/room', (req, res) => {

})

app.get('/',(req, res) => {
    res.send("Hello world") 
})

app.listen(3001);