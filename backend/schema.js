const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  country: {
    type: String,
  },
  tag: {
    type: String,
  },
  dateOfBilling: { type: Date, default: Date.now },
  dateofCreation: { type: Date, default: Date.now },
});

const contactModel = mongoose.model("contactModel",contactSchema);

module.exports = contactModel;
