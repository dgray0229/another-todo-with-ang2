var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),

    index = require('./routes/index'),
    tasks = require('./routes/tasks'),

    port = 3000,

    app = express();

// View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
// Angular 2 Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

// Run App
app.listen(port, function() {
    console.log('Server is running on port ' + port);
})