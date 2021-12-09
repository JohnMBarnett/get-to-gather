const db = require("../../../data/db-config");

const getAllUsers = () => {
  return db("users");
};

const add = async (newUser) => {
  const [id] = await db("users").insert(newUser);
  return db("users").where("user_id", id).first();
};

const getBy = async (filter) => {
  return db("users").where(filter);
};

const getById = async (id) => {
  const user = await db("users").where("user_id", id);
  return user;
};

const updateUser = async (id, updatedUser) => {
  if (updatedUser.username) {
    return db("users")
      .where("user_id", id)
      .first()
      .update({ username: updatedUser.username });
  } else {
    return db("users")
      .where("user_id", id)
      .first()
      .update({ password: updatedUser.password });
  }
};

module.exports = {
  add,
  getBy,
  getAllUsers,
  getById,
  updateUser,
};
