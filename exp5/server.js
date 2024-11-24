const express = require('express');
const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/getData', (req, res) => {
    res.json({ message: 'Data retrieved successfully!' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
