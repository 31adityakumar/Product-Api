// const express = require('express')

//this makes an api, doesnt't do anything. A server is synonymous to api and api is justa na app that doesn't have visual.
import express from 'express'
import router from './router'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
//app.<verb (method to which have to respond)> with the route of '/'
//this func takes teh same argument as above request and response
app.get('/', (req, res) => {
    console.log('hello from express')
    //Statsus code is just 3 digit number, depending on it lets client now the status of request
    res.status(200) //200-300 successfull status code and 400 is for wrong password or user id  
    //500 Status code is for server based error.
    // use of status code is dependent on user, its not manadatory but some browser throws error according to status code
    res.json({ message: 'hello' })
})

app.use('/api', router)

// module.exports = app
export default app