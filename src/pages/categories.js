import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get("/api/categories").then((resp) => {
      setCategories(resp.data);
    });
  }

  async function saveCategory(e) {
    e.preventDefault();
    await axios.post("/api/categories", { name, parentCategory });
    setName("");
    fetchCategories();
  }

  return (
    <Layout>
      <h2>Categories</h2>
      <label>New categoy name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type="text"
          placeholder="Category name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <select
          value={parentCategory}
          onChange={(e) => setParentCategory(e.target.value)}
        >
          <option value="">No parent category</option>
          {categories.length > 0 &&
            categories.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
        </select>
        <button type="submit" className="button-84">
          Save
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr key={category.name}>
                  <td>{category.name}</td>
                  <td>{category?.parent?.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}
