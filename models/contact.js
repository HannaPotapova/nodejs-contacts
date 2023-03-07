const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { deny: ["ru", "ir"] },
    })
    .required(),
  phone: Joi.string().required(),
});

const statusJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", productSchema);

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
};
