import Layout from "@/components/layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <div className="container">
        <Link href={'/products/new'} className='button-84'>Add new product</Link>
      </div>
    </Layout>
  );
}
