const express = require('express');
const database = require('./config/database');
const routes = require('./routes');

const app = express();
app.use(express.json());

console.log('Starting server....');

app.get('/', (req, res) => {
    res.send({ response: 'Application started!' });
});

app.use(routes);

database.sync({ force: false })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
