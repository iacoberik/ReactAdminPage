import  { Product }  from "@/modals/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  //Making the connection if is the case
  await mongooseConnect();
  //Posting the items to the products page
  if (method === "GET") {
    res.json(await Product.find())
  }
  //Creating post method in order to update to db the created item
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
}
