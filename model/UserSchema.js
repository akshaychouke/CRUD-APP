import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

// // to use auto increment in mongoose
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, "user");
 
const User = mongoose.model("user", userSchema);
export default User;

//to following is used to install the package with peer dependencies
// npm i --legacy-peer-deps pakaage_name
