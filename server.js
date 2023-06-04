//to get path to stylesheet
const path = require('path');
const express = require('express');

//import expression session
const session = require('express-session');

//settingup express handlebars template engine
const exphbs = require('express-handlebars');

//routes files will work as controller
const routes = require('./controllers');
//import helpers
const helpers = require('./utils/helpers');

//import sequilize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    expires: 10 * 60 * 1000, //this will setup the session sutomatically expire after 10 min
    /*httpOnly: true,
    secure: false,
    sameSite: 'strict',*/
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
//force true everytime server restarts, it restarts cookies
//false when program is ready
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('App Now listening'));
});
