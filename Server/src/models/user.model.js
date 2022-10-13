import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", userSchema);
