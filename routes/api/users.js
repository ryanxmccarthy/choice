const router = require('express').Router();
const session = require('express-session')
const mongoSession = require('connect-mongodb-session')(session);

const store = new mongoSession({
    uri: 'mongodb://localhost:27017/choiceData' || process.env.MONGO_URI,
    collection: 'choiceData'
  },
  error => {
    return error
  });

store.on('error', (error) => {
  if(error) {
    return new Error(JSON.stringify(error))
  }
})

app.use(session({
  secret: 'test',
  cookie: {
    maxAge: 1000 * 60 * 60,
  },
  store: store,
  resave: true,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  res.send('Hello' + JSON.stringify(req.session));
})
