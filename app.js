const express = require('express');
const app = express();

//middlewares
app.use(express.static('public'));


app.get('/ping', (req, res) => res.send('pong'));

app.listen(3000, () => console.log('Servido corriendo en HTTP://localhost:3000'));