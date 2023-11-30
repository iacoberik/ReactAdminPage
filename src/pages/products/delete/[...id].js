import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function deleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) return;
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  async function deleteProduct() {
    if (!id) return;
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  
  return (
    <Layout>
      <h2>Do you really want to delete product "{productInfo?.title}"?</h2>
      <button className="button-84 button-danger" onClick={deleteProduct}>
        Yes
      </button>
      <button className="button-84" onClick={goBack}>
        No
      </button>
    </Layout>
  );
}
