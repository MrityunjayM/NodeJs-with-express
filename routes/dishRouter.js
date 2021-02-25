const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req,res,next) => {
    res.end(`<h1>Will provide you the Dishes....</h1>`);
})
.post((req,res,next) =>{
    res.end(`<h1>Will add the  Dish: ${req.body.name}</h1>`);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('<h1>Oops!<br><br>Operation not permited.</h1>');
})
.delete((req,res,next) => {
    res.end('<h1>Deleting.....</h1>');
});

// Router for /dishes/dishId......
dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end('<h2>Will send details of the dish: ' + req.params.dishId +' to you!</h2>');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`<h2>POST operation not supported on /dishes/${ req.params.dishId}</h2>`);
})  
.put((req, res, next) => {
    res.write(`<h2>Updating the dish: ${req.params.dishId}</h2>`);
    res.end(`<h3>Will update the dish: ${req.body.name}</h3>`);
})
.delete((req, res, next) => {
      res.end(`<h2>Deleting dish: ${req.params.dishId}</h2>`);
});

module.exports = dishRouter;