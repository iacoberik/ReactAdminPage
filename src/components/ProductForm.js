import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductFrom({
  _id,
  title: existingtitle,
  description: existingDescription,
  price: existinPrice,
}) {
  //useStateuri for every single input
  const [title, setTitle] = useState(existingtitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existinPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    if (_id) {
      //Update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //Create product
      //Defining what we will get from post requst
      //Uploading to the db, data defined one line before
      await axios.post("/api/products", data);
    }
    //Setting goToProducts to true if all good in order to redirect on load
    setGoToProducts(true);
  }
  //When the form is submited succesfully we redirect to products page
  if (goToProducts) router.push("/products");

  function goBack() {
    router.push('/products')
  }

  return (
    <div className="product-inputs">
      <form onSubmit={saveProduct}>
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
        <button type="submit" className="button-84 button-save">
          Save
        </button>
        <button type="button" className="button-84" onClick={goBack}>
          Back
        </button>
      </form>
    </div>
  );
}
