const express = require("express");
const userRoutes = require('./routes/user.routes');
const { errorMiddleware } = require("./middleware/error.middleware");

const app = express();

app.use(express.json())

app.use("/api",userRoutes)

app.use(errorMiddleware)

// app.get("/test",(req,res,next)=>{
//   next(new Error("test error"))
// })

// app.use((err,req,res,next)=>{
//   console.log(err)

//   res.status(500).json({
//     message: "Something went wrong"
//   })
// })


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
