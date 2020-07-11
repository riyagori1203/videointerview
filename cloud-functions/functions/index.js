const functions = require('firebase-functions');
const cors = require('cors')

const app = require('express')()
app.use(cors({ origin: true }))

//File imports
const { handleTest, signup } = require("./user");

app.get('/', handleTest)
app.post('/signup', signup)

exports.api = functions.region('asia-east2').https.onRequest(app)
