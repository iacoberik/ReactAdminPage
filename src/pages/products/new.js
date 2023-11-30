import { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // function validationCheck(input) {
  //   console.log(typeof input)
  // }

  async function createProduct(e) {
    e.preventDefault();
    const data = {title, description, price};
    await axios.post('/api/products', data)
  }  

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
