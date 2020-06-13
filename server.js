const approvedContacts = require('./ApprovedContacts')
const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());
app.use(cors())

const contactsRouter = createRouter(approvedContacts)
app.use('/', contactsRouter);


app.get('/', function(req, res){
    res.json(approvedContacts)
    console.log(approvedContacts)
})

app.listen(8000, function(){
    console.log("App running on port 8000")
})

