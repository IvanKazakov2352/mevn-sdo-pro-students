const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  fio: {
    type: String,
    required: [true, "Введите пожалуйста ФИО"],
  },
  position: {
    type: String,
    required: [true, "Выберите пожалуйста должность"],
  },
  email: {
    type: String,
    required: [true, "Введите пожалуйста email"],
  },
  password: {
    type: String,
    required: [true, "Введите пожалуйста пароль"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id,
      fio: user.fio,
      position: user.position,
      email: user.email,
    },
    "secret"
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
