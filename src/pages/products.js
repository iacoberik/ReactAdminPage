import Link from "next/link";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "@/components/Product";

export default function Products() {
  //UseState for products in order to populate the array after the db will get them
  const [products, setProducts] = useState([]);
  //Fetching data from the db in order to display
  useEffect(() => {
    axios.get("api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (products.length > 0) {
    return (
      <Layout>
        <Link href={"/products/new"} className="button-84">
          Add new product
        </Link>
        <Product products={products}></Product>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h2>No products available</h2>
        <Link href={"/products/new"} className="button-84">
          Add new product
        </Link>
      </Layout>
    );
  }
}
