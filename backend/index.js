const connectToMongo=require('./db')
const express = require('express')
var cors=require('cors')
connectToMongo();
const app = express();
const port = 5000
app.use(cors())
app.use(express.json())

app.use("/api/auth",require("./routes/auth"))
app.use("/api/upload",require("./routes/upload"))



app.listen(port, () => {
  console.log(`listening to ${port}`)
})