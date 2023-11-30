import Layout from "@/components/Layout";
import ProductFrom from "@/components/ProductForm";

export default function NewProduct() {
    return (
      <Layout>
        <div className="container"><h2>Add Product</h2></div>
        <ProductFrom></ProductFrom>
      </Layout>
    )
}
