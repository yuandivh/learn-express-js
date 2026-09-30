let users = [
  {
    id: 1,
    name: "Yuandi",
    email: "yuandi@example.com"
  },
  {
    id: 2,
    name: "Budi",
    email: "budi@example.com"
  }
]

const getUsers = (req, res) => {
  res.json({
    message: "Retrieved users data successfully",
    data: users
  })
}

const getUser = (req, res) => {
  const id = Number(req.params.id)

  const user = users.find(user => user.id === id)

  if(!user){
    return res.status(404).json({
      message: "User not found"
    })
  }

  res.json({
    data: user
  })
}

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
  const {name, email} = req.body

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

  const user = {
    id: users.length + 1,
    name: name,
    email: email
  }

  users.push(user)

  res.status(201).json({
    message: "User created",
    data: users
  });
};


const updateUser = (req, res) => {
  const id = Number(req.params.id)

  if(!Number.isInteger(id) || id < 1){
    return res.status(400).json({
      message: "ID must be a positive integer"
    })
  }

  const user = users.find(user => user.id === id)

  if(!user){
    return res.status(404).json({
      message: "User not found"
    })
  }
  
  const {name, email} = req.body

  user.name = name
  user.email = email

  res.json({
    message: "Data updated",
    data: users
  })
}

const deleteUser = (req, res) => {
  const id = Number(req.params.id)

  if(!Number.isInteger(id) || id < 1){
    return res.status(400).json({
      message: "ID must be a positive integer"
    })
  }

  const userIndex = users.findIndex(user => user.id === id)

  if (!userIndex === -1) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  const deletedUser = users.splice(userIndex,1)

  res.json({
    message: "Deleted user successfully",
    data: users
  })
}


const getHome = (req, res) => {
  res.json({
    message: "Welcome to ExpressJS",
  });
};

const testError = (req, res, next) => {
  next(new Error("Data error"))
}



module.exports = {
  getProfile,
  getHome,  
  getUserDetail,
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  testError

};
