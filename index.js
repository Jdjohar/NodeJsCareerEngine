const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const userdata = [
    {
        username: 'jashan',
        password: '123456',
        email: 'jashan@gmail.com'
    },
    {
        username: 'Aman',
        password: '123456',
        email: 'aman@gmail.com'
    },
    {
        username: 'arsh',
        password: '123456',
        email: 'arsh@gmail.com'
    },
]

app.get('/', (req, res) => {
  res.send('Hello World! from Express')
})


app.get('/login', (req, res) => {
  res.send('Call fro Login Api')
})
app.get('/signup', (req, res) => {
  res.send('<h2>Call fro Signup Api</h2>')
})
app.get('/userdetails', (req, res) => {
  res.send(userdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})