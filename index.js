const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Hello world'));

app.use('/users', userRoute);



app.listen(port, () => console.log('Listening on port 3000'));