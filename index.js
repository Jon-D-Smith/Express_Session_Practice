const express = require('express');
const app = express();
const PORT = 3000;
const session = require('express-session');

app.use(session({
    secret: "thisisnotagoodsecret"
}))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} Times`)
})


app.listen(PORT, () => {
    console.log(`Conected to port ${PORT}`)
})