const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const { url } = require('inspector');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/api', routes.index);

app.post('/login', urlencodedParser, routes.login);
app.post('/create', urlencodedParser, routes.createAccount);
//:id is a parameter

//Routes.editperosn is running a method, which is called whenever something uses the POST method with an action of the same value

//deletes based on ID

app.listen(3000);
