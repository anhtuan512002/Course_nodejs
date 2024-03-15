const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/demo_product');
        console.log("connect succesfull");
    } catch(error){
        console.log("fail");
    }
}
module.export={ connect };