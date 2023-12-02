import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductFrom({
  _id,
  title: existingtitle,
  description: existingDescription,
  price: existinPrice,
  images,
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

  async function uploadImages(e) {
    console.log(e.target.files)
    const files = ev.target?.files
    if(files?.length > 0) {
      const data = new FormData();
      files.forEach(file => {
        data.append('file', file)
      })
      const res = await axios.post('/api/upload', data)
      console.log(res.data)
    }
  }

  function goBack() {
    router.push("/products");
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
        <label>Photos</label>
        <div className="mb-2">
          <label>
            <div className="button-84">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg> */}
              Upload Images
              <input type="file" className="hidden" multiple onChange={uploadImages}></input>
            </div>
            
          </label>
          {!images?.length && (
            <div className="text-red-500">No photos on this product</div>
          )}
        </div>
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
