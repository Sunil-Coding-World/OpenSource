import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: [true, "enter your course tittle "],
    },
    description: {
        type: String,
        required: [true, "enter your couse description "],
    },
  instructor: {
    type: String,
    required: [true, " enter instructor name "],
},
  imageUrl: {
    type: String,
    required: [false, "please give image url "],
},
  syllabus: [
    {
      week: {
        type: String,
        required: [true, "please course syllabus "],
      },
      topics: [
        {
          type: String,
          required: [true, "please course topics "],
        },
      ],
    },
  ],
  roadmap: [
    {
      type: String,
      required: [true, "enter road maps for the course "],
    },
  ],
});


const virtual = CourseSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
CourseSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Course = mongoose.model("course", CourseSchema);