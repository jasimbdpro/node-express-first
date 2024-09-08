const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 3000;

let users = ['Asad', 'Moin', 'Sabed', 'Susmita', 'Sohana'];  // Array to store user names

// GET endpoints
app.get('/name', (req, res) => {
    res.send('Jasim Uddin');
});

app.get('/', (req, res) => {
    const fruits = {
        product: 'Git Connected',
        price: 200
    };
    res.send(fruits);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    res.send({ name, userId });
});

app.get('/fruits/banana', (req, res) => {
    res.send({ fruit: 'banana', quantity: 10000 });
});

// POST endpoint to add new users
app.post('/adduser', (req, res) => {
    const { name } = req.body;
    if (name) {
        users.push(name);  // Add the new name to the array
        res.status(201).send({ name, id: users.length - 1 });  // Send back the added user info
    } else {
        res.status(400).send({ error: 'Name is required' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
