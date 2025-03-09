const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    fertilizer: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
