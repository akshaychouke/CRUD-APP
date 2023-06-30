import User from "../model/UserSchema.js";

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
  