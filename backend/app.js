const express  = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
require('./DB/conn')
app.use(express.json());  //always this json put on jst below of connection 
app.use(require('./router/auth'))


app.listen(PORT, () =>{
    console.log(`the server is running on port no ${PORT}`);
})