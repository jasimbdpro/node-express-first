const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 3000

//get  
app.get('/name', (req, res) => {
    res.send('Jasim Uddin')
})

app.get('/', (req, res) => {
    const fruits = {
        product: 'Git Connected',
        price: 200
    }
    res.send(fruits)
})
const users = ['Asaddgg', 'Moin', 'Sabeddd', 'Susmita', 'Sohana']
app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const userId = req.params.id
    const name = users[userId]
    res.send({ name, userId })
})


app.get('/fruits/banana', (req, res) => {
    res.send({ fruit: 'banana', quantity: 10000 })
})

//post
app.post('/addUser', (req, res) => {
    const user = req.body
    user.id = 55
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})