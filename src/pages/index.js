import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="container"><h2>Hello, {session?.user?.name}</h2></div>
    </Layout>
  );
}
