const getProduct = (req, res) => {
  const category = req.query.category;
  const page = req.query.page === undefined ? 1 : Number(req.query.page);

  if (!Number.isInteger(page) || page < 1) {
    return res.status(400).json({
      message: "Page must be number",
    });
  }

  res.json({
    message: "Get products",
    category: category,
    page: page,
  });
};

module.exports = {
  getProduct,
};
