const { models, model, Schema } = require("mongoose");
//Creating a modal schema for every single product
const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [{type: String}],
});

// export const Product = model("Product", ProductSchema)
//Checking if the model is created. If so, we do not create it again.
export const Product = models.Product || model('Product', ProductSchema);