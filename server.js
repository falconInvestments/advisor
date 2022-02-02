const express = require('express')
const app = express()
const port = process.env.PORT || 5432

// Needed for access from local host
const cors = require('cors')
app.use(cors())

// middlewares
app.use(express.json())

//routers
const topicRouter = require('./routes/topicRouter.js')
app.use('/topics', topicRouter)

const tipRouter = require('./routes/tipRouter.js')
app.use('/tips', tipRouter)

app.get('/', (req, res) => {
  res.send('Advisor!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// Pushing to heroku: ///////////////////
// git push heroku main 