const pool = require("../config/database")

const getProductFromDatabase = async () => {
    const result = await pool.query(
        "SELECT * FROM products ORDER BY id ASC"
    )
    return result.rows
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve({
//           id: 1,
//           name: "laptop",
//           price: 1000000,
//         });
//       } else {
//         reject(new Error("Database Error"));
//       }
//     }, 1000);
//   });
};

const getProductDetailFromDatabase = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [id]
    )
    return result.rows[0]
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = data.find(d => d.id === id)
//         if(!product){
//             return reject(new Error("Data not found"))
//         }
//         resolve(product)
//     },1000)
//   });
};

module.exports = {
  getProductFromDatabase,
  getProductDetailFromDatabase
};
