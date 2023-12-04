import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [name, setName] = useState("");
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
    await axios.post("/api/categories", { name });
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
        <button type="submit" className="button-84">
          Save
        </button>
      </form>
      <table>
        <th>
          <tr>
            <td>Category name</td>
          </tr>
        </th>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr>
                  <td>{category.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}
