import { Mongoose } from "mongoose";

const UserSchema = new Mongoose.schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 10,
    },
    email: {
      type: String,
      required: true,
      max: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 2,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = Mongoose.model("User", UserSchema);
export default User;
