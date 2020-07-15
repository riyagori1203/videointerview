const functions = require('firebase-functions');
const cors = require('cors')

const app = require('express')()
app.use(cors({ origin: true }))

//File imports
const { login, signup } = require("./user");
const { user } = require('./user/user')

const authMiddleware = require('./utils/authMiddleware')

app.get('/', (req, res) => {
    res.send("Not a valid route for this API")
})
app.post('/signup', signup)
app.post('/login', login)
app.post('/user', authMiddleware, user)

app.get('/testlogin', authMiddleware, (req, res) => {
    return res.send(`You are logged in as: ${req.user.username}`)
})

exports.api = functions.region('asia-east2').https.onRequest(app)
