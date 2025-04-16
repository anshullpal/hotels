const express = require('express');
const router = express.Router();
const MenuItem = require('./../Models/MenuItem');

router.post('/', async(req, res) =>{
    
    try{
        const data = req.body // Assuming the request body contains the person data

    // Create a new Person document using the Mongoose Model
    const newMenuItem = new MenuItem(data);

    // Save the new Person to the database
    const response = await newMenuItem.save();
            console.log('data saved');
            res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Sever error'});
    }
})



router.get('/', async(req,res)=> {
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Sever error'});
    }
})

router.get('/:tasteType', async(req,res)=>{
    try{
        const tasteType = req.params.tasteType; // Extract the taste from the URL parameter
    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){

        const response = await MenuItem.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: 'Invalid taste type'});
    }
}
    catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Sever error'});
    }
})

module.exports = router;