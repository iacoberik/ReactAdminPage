import { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function NewProduct() {
  //useStateuri for every single input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false)
  const router = useRouter()

  async function createProduct(e) {
    e.preventDefault();
    //Defining what we will get from post requst
    const data = {title, description, price};
    //Uploading to the db, data defined one line before
    await axios.post('/api/products', data)
    //Setting goToProducts to true if all good in order to redirect on load
    setGoToProducts(true)
  }  
  //When the form is submited succesfully we redirect to products page
  if (goToProducts) router.push('/products')

  return (
    <Layout>
      <div className="container product-inputs">
        <form onSubmit={createProduct}>
          <h2>Add new product</h2>
          <label>Product name</label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter your product name"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          ></input>
          <label>Price</label>
          <input
            id="product-name"
            type="number"
            placeholder="Enter your price"
            min="1"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          ></input>
          <label>Product description</label>
          <textarea
            placeholder="Enter your product description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>
          <button type="submit" className="button-84 button-save">Save</button>
        </form>
      </div>
    </Layout>
  );
}
