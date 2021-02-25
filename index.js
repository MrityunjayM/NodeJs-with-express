const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter')
const promotionRouter = require('./routes/promoRouter')
const leaderRouter = require('./routes/leaderRouter')

const hostName = 'localhost';
const port = 3000;

const app = express();

// Implementing Middleware Morgan......
app.use(morgan('dev'));

// Route's...........
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('leaders',leaderRouter);
app.use('/leadership',leaderRouter);

app.use(bodyParser.json());

// Default route.........
app.use((req,res,next) => {
    // console.log(req.header);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<center><h2>This is an <i>Express</i> server.....</h2></center>');
});

// Create server........
const server = http.createServer(app);

server.listen(port,hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}/`);
});