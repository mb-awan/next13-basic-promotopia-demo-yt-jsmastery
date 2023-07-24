const { model, Schema, models } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: "String",
    unique: [true, "Email already exists!"],
    required: [true, "Email is required"],
  },

  username: {
    type: String,
    required: [true, "Username is Required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
// Since Nest only start api server when
//some API is called and therefore when new request come we have to identify that model has already done its work or not

export default User;
