const express = require('express');
let router = express.Router();

router.get("/",(req,res)=>{
    res.send("user information");
})
router.get("/newuser",(req,res)=>{
    res.send("new user added");
})
router.get("/createuser",(req,res)=>{
    res.send("Add new user added");
})

//req.params.id give the output of id that mentioned in the res.send (url)
router
    .route('/:id')
    .get((req,res)=>{
        // it is used for the middleware
        //console.log(req.usery)
        res.send("retrive id value" + req.params.id) 
    })
    .put((req,res)=>{
        res.send("update id value" + req.params.id);
    })
    .delete((req,res)=>{
        res.send("delete id value" + req.params.id);
    })

const users = [{name:"raja"},{name:"rani"},{name:"sepoy"}];

// next is the middleware if we mentioned the next we sholud use the next or else it we show you error or the page will not be loaded
//param denotes the next (value) 
// router.param('id',(req,res,next,id)=>{
//     console.log(id);
//     req.usery = users[id]
//     next();
// })


// router.get('/:id',(req,res)=>{
//      res.send(" retrive id value" + req.params.id);
// })
// router.put('/:id',(req,res)=>{
//     res.send("update id value" + req.params.id);
// })
// router.delete('/:id',(req,res)=>{
//     res.send("delete id value" + req.params.id);
// })

module.exports = router;
 