import Layout from "@/components/Layout";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");

  async function saveCategory(e) {
    e.preventDefault();
    await axios.post("/api/categories", { name });
    setName("");
  }

  return (
    <Layout>
      <h2>Categories</h2>
      <label onSubmit={saveCategory} className="flex gap-1">
        New categoy name
      </label>
      <form>
        <input
          type="text"
          placeholder="Category name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <button type="submit" className="button-84">
          Save
        </button>
      </form>
    </Layout>
  );
}
