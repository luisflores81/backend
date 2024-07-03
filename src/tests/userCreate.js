const User = require("../models/User")

const userCreate = async () => {
  const user = {
    firstName: 'gatito',
    lastName: "tigri",
    email: "tigri@gmail.com",
    password: "tigri1234",
    phone: "122321"
  }
  await User.create(user)
}

module.exports = userCreate