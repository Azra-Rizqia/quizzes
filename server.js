const express = require('express')
const app = express()
const cors = require('cors')
const quizRouter = require('./router/quiz')
const jobsheetRouter = require('./router/jobsheet')
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
  res.send('Quiz ExpressJS API by Peika')
})

app.use('/api/quizzes', quizRouter)
app.use('/api/jobsheet', jobsheetRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})