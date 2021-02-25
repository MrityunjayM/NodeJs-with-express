const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req,res,next) => {
    res.end(`<h1>Will provide you the Promotion\'s...</h1>`);
})
.post((req,res,next) =>{
    res.end(`<h1>Will add the promotion: ${req.body.name}</h1>`);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('<h1>Oops!<br><br>Operation not permited.</h1>');
})
.delete((req,res,next) => {
    res.end('<h1><i>Deleting.....</i></h1>');
});

// Router for /promotions/promoId......
promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('<h2>Will send details of the promotion: ' + req.params.promoId +' to you!</h2>');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`<h2>POST operation not supported on /promotions/${ req.params.promoId}</h2>`);
})  
.put((req, res, next) => {
    res.write(`<h2>Updating the promotion: ${req.params.promoId}</h2>`);
    res.end(`<h3>Will update the promotion: ${req.body.name}</h3>`);
})
.delete((req, res, next) => {
      res.end(`<h2>Deleting promotion: ${req.params.promoId}</h2>`);
});

module.exports = promoRouter;