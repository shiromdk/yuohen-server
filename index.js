//load config




//load all dependencies

var _ = require('lodash');
_.each([
	['bodyparser', 'body-parser'],
	['cookieparser', 'cookie-parser'],
	['express', 'express'],
	['mongoose', 'mongoose'],
	['path', 'path']
], function(module) {
	global[module[0]] = require(module[1]);
});

//setting up mLab access by using Mongoose libaries
var dbconfig = require('./config/dbconfig');
mongoose.Promise = Promise;
mongoose.connect(dbconfig.url);



//Setting up the Express web app libraries
var app = express();

//Setting up Express middlewares

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

//Linking routes
app.use('/', require('./routes/web'));



//Setting up public folder
app.use(express.static('public'));

//Setting up spawns from database
var SpawnCount = require('./config/models/spawncount'); // the mongoose model for the spawncount
const spawnlist= require('./lib/classes/db-singleton');
spawnlist.sync();


//retrieve spawn count from db or create new counter for first run


//dummy data entry





//Server listens on port set by Heroku or port 8080 if run on computer without env set up
app.listen(process.env.PORT || 8080, function() {
    console.log("Server is currently running");
});
