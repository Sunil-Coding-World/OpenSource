import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses'
  }],
    email: {
        type: String,
        required: [true, "please enter your email "],
        unique: true,
        validate: validator.isEmail,
    },
    password: {
        type: String,
        required: [true, "please enter your password "],
        minlength: [6,"password must be 6 character"],
  },

    resetPasswordToken: String,
    resetPasswordExpire: String,
}, { timestamp: true });


const virtual = UserSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
export const User = mongoose.model("User", UserSchema);