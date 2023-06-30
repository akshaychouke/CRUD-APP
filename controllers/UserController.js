import User from "../model/UserSchema.js";

//to add a new user to the database
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    console.log("new user added successfully");
    res.status(201).json(`User ${newUser.name} added successfully`);
  } catch (error) {
    console.log("error in addUser controller", error.message);
    res.status(409).json({ message: error.message });
  }
};

//to get all users from the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    // console.log("users fetched successfully");
    res.status(200).json(users);
  } catch (error) {
    console.log("error in getAllUsers controller", error.message);
    res.status(409).json({ message: error.message });
  }
};

//to get a single user from the database
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    console.log("error in getUser singlecontroller", error.message);
    res.status(409).json({ message: error.message });
  }
};

//to edit a user in the database
export const editUser = async (req, res) => {
  let user = req.body;
  const editUserData = new User(user);
  try {
    await User.updateOne({ _id: user._id }, editUserData);
    res.status(200).json(`User ${editUserData.name} updated successfully`);
  } catch (error) {
    console.log("error in editUser controller", error.message);
    res.status(409).json({ message: error.message });
  }
};

//to delete a user from the database
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json(`User deleted successfully`);
  } catch (error) {
    console.log("error in deleteUser controller", error.message);
    res.status(409).json({ message: error.message });
  }
};
