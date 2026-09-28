const getProfile = (req, res) => {
  const id = req.user.id;
  const name = req.user.name;
  res.json({
    message: "Profile",
    user: {
      id: id,
      name: name,
    },
  });
};

const getUserDetail = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "ID must be a number",
    });
  }

  res.json({
    message: "User Detail",
    user_id: id,
  });
};

const createUser = (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim() || !email) {
    return res.status(400).json({
      message: "name or email must be filled!",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Email is invalid",
    });
  }

  res.status(201).json({
    message: "User created",
    name: name,
    email: email,
  });
};


const getHome = (req, res) => {
  res.json({
    message: "Welcome to ExpressJS",
  });
};



module.exports = {
  getProfile,
  getHome,  
  getUserDetail,
  createUser
};
