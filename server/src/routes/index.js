const { Router } = require("express");
const { getCountries } = require("../controllers/getAllCountries");


const router = Router();



// router.get("/",(req,res)=>{

// })

router.get("/",getCountries=>{
    res.status(200).send("TODA LA API");
})


module.exports = router;
