import { Product } from "@/modals/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  //Making the connection if is the case
  await mongooseConnect();
  //Posting the items to the products page
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
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

  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    //Here in updateOne pram we have objects like _id:_id etc.. but the names are the same and in this case we do not need to define it with :
    await Product.updateOne({ _id }, { title, description, price });
    res.json(true);
  }
}
