// const getProduct = (req, res) => {
//   const category = req.query.category;
//   const page = req.query.page === undefined ? 1 : Number(req.query.page);

const {
  getProductFromDatabase,
  getProductDetailFromDatabase,
} = require("../services/product.service");

//   if (!Number.isInteger(page) || page < 1) {
//     return res.status(400).json({
//       message: "Page must be number",
//     });
//   }

//   res.json({
//     message: "Get products",
//     category: category,
//     page: page,
//   });
// };

const getProduct = async (req, res, next) => {
  try {
    const product = await getProductFromDatabase();
    res.json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getProductDetail = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return next(new Error("ID must be a positive integer"));
    }
    const product = await getProductDetailFromDatabase(id);
    if(!product){
      return res.status(404).json({
        message: "Product not found"
      })
    }
    res.json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProduct,
  getProductDetail,
};
