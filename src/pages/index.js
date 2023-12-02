import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h2>Hello, {session?.user?.name}</h2>
      <img src={session?.user?.image}></img>
    </Layout>
  );
}
