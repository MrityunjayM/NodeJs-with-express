const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req,res,next) => {
    res.end(`<h1>Will provide you the leader:</h1>`);
})
.post((req,res,next) =>{
    res.end(`<h1>Will add the  leader: ${req.body.name}</h1>`);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('<h1>Oops!<br><br>Operation not permited.</h1>');
})
.delete((req,res,next) => {
    res.end('<h1>Delete all the leader\'s</h1>');
});

// Router for /leaders/leaderId......
leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end('<h2>Will send details of the leader: ' + req.params.leaderId +' to you!</h2>');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`<h2>POST operation not supported on /leaders/${ req.params.leaderId}</h2>`);
})  
.put((req, res, next) => {
    res.write(`<h2>Updating the leader: ${req.params.leaderId}</h2>`);
    res.end(`<h3>Will update the leader: ${req.body.name}</h3>`);
})
.delete((req, res, next) => {
      res.end(`<h2>Deleting leader: ${req.params.leaderId}</h2>`);
});

module.exports = leaderRouter;