const mongoose = require('mongoose')


const connectDB = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.DB_URL)

        console.log(`MongoDB connected successfully: ${conn.connection.host}`.cyan.bold.underline)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB