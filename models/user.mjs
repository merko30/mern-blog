import mongoose from "mongoose";
var schema = mongoose.Schema;
import bcrypt from "bcrypt";

var userSchema = new schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, unique: true, required: true },
  avatar: { type: String },
  password: { type: String, required: true },
  posts: [{ type: schema.Types.ObjectId, ref: "Post" }]
});

userSchema.pre("save", function(next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) throw err;
    user.password = hash;
    next();
  });
});

export default mongoose.model("User", userSchema);
