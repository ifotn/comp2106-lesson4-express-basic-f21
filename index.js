// ref express package
let express = require('express')

// instantiate new express application - the "new" keyword is not required
let app = express()

// functions to handle individual url requests
let hello = ((req, res) => {
    res.send('Hello world')
})

let goodbye = ((req, res) => {
    res.send('Goodbye world')
})

let index = ((req, res) => {
    res.send('Home')
})

// example from lab 1
let me = ((req, res) => {
    res.send('I teach at Georgian College')
})

// map url's to the corresponding functions
app.get('/hello', hello)
app.get('/goodbye', goodbye)
app.get('/', index)
app.get('/me', me)

app.listen(3000, () => console.log('Express running on port 3000'))