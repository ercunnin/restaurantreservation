let express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//=================Used to store the data==================
let customerWaitlist = [{
    name: 'Bobby B',
    phoneNum: '555-555-5545',
    email: 'Bobby.B@sevenrealms.co.uk',
    unigueID: 0

}];


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'table.html'));
});

app.get('/api/tables', (req, res) => {
    return res.json(customerWaitlist);
});

app.get('/api/waitlist', (req, res) => {

});


//============Post new customers to the Arr=====================
app.post('/api/reservation/:customerWaitList', (req, res) => {
    let newCustomer = req.body;

    console.log(newCustomer);

    customerWaitlist.push(newCustomer);
    res.json(newCustomer);
});

//========starts server and listens to the port==================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});