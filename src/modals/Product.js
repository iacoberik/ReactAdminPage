const { models, model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

export const Product = model("Product", ProductSchema)
// export const Product = models.Product || model('Product', ProductSchema);