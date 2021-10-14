const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {

    var letX = req.query.x;
    var letY = req.query.y;
    var x = parseInt(letX, 10);
    var y = parseInt(letY, 10);
    var method = req.query.method;
    var total;

    if(req.query.method == 'add'){
        total = x+y;
    }
    else if(req.query.method == 'subtract'){
        total = x-y;
    }
    else if(req.query.method == 'divide'){
        total = x/y;
    }
    else if(req.query.method == 'multiply'){
        total = x*y;
    }
    else{
        res.status(404).send('No suitable methods found');
    }
    res.json({
        "x" : x, 
        "y" : y,
        "operation" : method,
        "result" : total
    });
});

//you can chnage methods by replacing addition with the other applicable method
module.exports = router;
console.log('Server running on http://localhost:3000/lab2?method=addition&x=100&y=10')