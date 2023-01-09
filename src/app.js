const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const indexRoutes = require("./routes/index.js")

const app = express();

//setings
app.set("port", process.env.PORT || 3000);

//middlwares

app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan('dev'))

//routes
app.use('/', indexRoutes)

app.listen(app.get("port"), () => {
 console.log('server on port', app.get('port'));
});