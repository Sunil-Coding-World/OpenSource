import mongoose from "mongoose";


const enrollmentSchema = new mongoose.Schema({
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});




const virtual  = enrollmentSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
enrollmentSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})

export const Enroll = mongoose.model("enroll", enrollmentSchema);




