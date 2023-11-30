import Link from "next/link";
import Layout from "@/components/layout";

export default function Products() {
  return (
    <Layout>
      <div className="container">
        <Link href={'/products/new'} className='button-84'>Add new product</Link>
      </div>
    </Layout>
  );
}
