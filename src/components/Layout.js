import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
    const button = 'bg-red-500'
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <button onClick={() => signIn("google")} className="button-84">
          Login with Google
        </button>
      </div>
    );
  }
  return (
    <>
      <Nav></Nav>
      <div className="container">{children}</div>
      <div className="footer">
        <button onClick={() => signOut("google")} className="button-84">
          Logout
        </button>
      </div>
    </>
  );
}
