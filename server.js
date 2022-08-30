const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;


// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})