import mongoose from "mongoose";
const Connection = async (username,password) => {
  const URL = `mongodb+srv://${username}:${password}@crudapp.c2oypdx.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to database ", error.message);
  }
};

export default Connection;
  