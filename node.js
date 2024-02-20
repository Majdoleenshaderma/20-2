const express = require('express')

var app = express();



app.get('/', function (req, res) {
    res.send("Welcome Server")
})
app.get('/fact/:num', function (req, res) {

    res.json("fact is :" + fact(req.params.num))
})
app.get('/fib/:num', function (req, res) {

    res.json("fib is :" + fib(req.params.num))
})
app.get('/mult/:num', function (req, res) {

    res.json("mult is :" + mult(req.params.num))
})
app.get('/sum/:num', function (req, res) {

    res.json("sum is :" + sum(req.params.num))
})
app.get('/string/:str', function (req, res) {

    res.json("fact is :" + reverse(req.params.str));
})
function mult(num) {
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        let m = num * i
        arr.push(m)
    }

    return arr;

}
function reverse(word) {
    let rever = word.split("").reverse().join("");
    if (rever == word)
        return 'true'
    else
        return 'fulse'
}


function fact(num) {
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * (i);
    }
    return f;

}
function sum(num) {
    let f = 0;
    for (let i = 1; i <= num; i++) {
        f = f + (i);
    }
    return f;

}
function fib(numTerms) {
    var fibSequence = [0, 1];

    for (var i = 2; i < numTerms; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}
var server = app.listen(7000, function () {
    var host = server.address().address // local one  
    var port = server.address().port
})
