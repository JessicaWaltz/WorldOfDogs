import express from 'express';
import fs from "fs";
const port = 6099;
const app = express();
const dogRouter = express.Router();

//dogRouter.post('',(req,res)=>{
   // const dog = s
//});
app.use('',(req,res, next)=>{
    next();
});
/*app.get('/allDogs',(req,res,next)=>{
    res.send('ALLDOGS');
});*/
app.listen(port,()=>{
console.log("Listening on port" + port);
});