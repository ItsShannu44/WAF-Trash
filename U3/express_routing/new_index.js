// const express= require('express');
// const app = express();
// const PORT = 3000;

// const router = express.Router();
// router.get('/', (req, res)=> {
//     console.log("Express Router is working");
//     res.send("Express Router is Working");
// });

// app.use(router);

// app.listen(PORT, (err)=>{
//     if(err){
//         console.error("Error starting server:", err);
//     }else{
//         console.log(`Server listening on PORT ${PORT}`);
//     }
// });


const express= require('express');
const app = express();
const PORT = 3000;

const router0= express.Router();
const router1= express.Router();
const router2= express.Router();
const router3= express.Router();

router0.get('/', function( req, res, next){
    console.log("Home Page for section A");
    res.send("Home Page for section A")
});
router1.get('/user', function( req, res, next){
    console.log("Home Page for section B");
    res.send("Home Page for section B")
});

router2.get('/', function( req, res, next){
    console.log("Home Page for section C");
    res.send("Home Page for section C")
});