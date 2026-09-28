const express = require("express");
const userRoutes = require('./routes/user.routes')

const app = express();

app.use(express.json())

app.use(userRoutes)

// const checkApiKey = (req,res,next) => {
//     const apiKey = req.headers["x-api-key"]
//     if(apiKey !== "secret123"){
//         return res.status(401).json({
//             message: "Unauthorized"
//         })
//     }
//     next()
// }

// const attachUser = (req,res,next) => {
//     req.user = {
//         id: 1,
//         name: "Yuandi"
//     }
//     next()

// }

// app.get("/profile", attachUser, (req,res) => {
//     const id = req.user.id
//     const name = req.user.name
//     res.json({
//         message: "Profile",
//         user: {
//             id: id,
//             name: name
//         }
//     })
// })

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello Express!!",
//   });
// });

// app.get("/tickets", (req, res) => {
//   res.json({
//     message: "Get Tickets",
//     search: req.query.search,
//     page: req.query.page
//   });
// });

// app.get("/tickets/:id", (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({
//       message: "ID must be a number",
//     });
//   }
//   res.json({
//     message: "Get ticket detail",
//     id: id,
//   });
// });

// app.post("/tickets", (req, res) => {
//     const title = req.body.title
//     const description = req.body.description

//   res.status(201).json({
//     message: "Create ticket!",
//     title: title,
//     description: description
//   });
// });

// app.get("/users/:id", (req,res) => {
//     const id = Number(req.params.id)
//     if(Number.isNaN(id)){
//         return res.status(400).json({
//             message: "ID must be a number"
//         })
//     }
//     res.json({
//         message: "User detail",
//         user_id: id
//     })
// })

// app.post("/users", (req,res) => {
//     const name = req.body.name?.trim()
//     const email = req.body.email?.trim()
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
//     if(!name || !name.trim() || !email){
//         return res.status(400).json({
//             message: "name or email must be filled!"
//         })
//     }
    
//     if(!emailRegex.test(email)){
//         return res.status(400).json({
//             message: "Email is invalid"
//         })
//     }

//     res.status(201).json({
//         message: "User created",
//         name: name,
//         email: email
//     })
// })

// app.get("/products", checkApiKey, (req,res) => {
//     const category = req.query.category
//     const page = req.query.page === undefined ? 1 : Number(req.query.page)

//     if(!Number.isInteger(page) || page < 1){
//         return res.status(400).json({
//             message: "Page must be number"
//         })
//     }

//     res.json({
//         message: "Get products",
//         category: category,
//         page: page
//     })
// })

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
