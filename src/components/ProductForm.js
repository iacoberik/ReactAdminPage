import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductFrom({
  _id,
  title: existingtitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
}) {
  //useStateuri for every single input
  const [title, setTitle] = useState(existingtitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price, images };
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
    const files = e.target?.files;

    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
    }

    setIsUploading(false);
  }

  function goBack() {
    router.push("/products");
  }

  function updateImagesOrder(images) {
    setImages(images);
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
          <ReactSortable
            list={images}
            setList={updateImagesOrder}
            className="flex gap-1 flex-wrap mb-2"
          >
            {!!images?.length &&
              images.map((image) => (
                <div key={image} className="h-24">
                  <img className="h-24 rounded" src={image} alt={image}></img>
                </div>
              ))}
          </ReactSortable>
          <label>
            {isUploading && <Spinner></Spinner>}
            {!isUploading && (
              <div className="button-84">
                Upload Images
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={uploadImages}
                ></input>
              </div>
            )}
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
