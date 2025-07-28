const mongoose = require('mongoose')

const connectToDB = ()=>{ 
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
    console.log('connected to DB')    
})
    .catch((err)=>{
    console.log("Error connecting to MongoDB:",err)
})
}

module.exports = connectToDB