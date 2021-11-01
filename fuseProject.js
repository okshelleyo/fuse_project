
const express = require('express');
const app = express();

app.use(express.json());


// GET: /api/add?num1=x&num2=x
app.get('/api/add', (req, res) => {
    
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let result = (num1 + num2);

    const obj = {num1: num1, num2: num2, result: result};
    const jsonObj = JSON.stringify(obj);

    res.send(jsonObj);

});


// POST: /api/subtract
app.post('/api/subtract', (req, res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = num1 - num2;

    const subtractObj = {
        num1: num1,
        num2: num2,
        result: result
    }
    
    res.send(subtractObj);
});


// PORT
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}...`));