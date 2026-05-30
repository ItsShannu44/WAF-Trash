import { useSearchParams } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function Product() {
  const [params, setParams] = useSearchParams();

  const [search, setSearch] = useState(params.get("search") || "");
  const [category, setCategory] = useState(params.get("category") || "");
  const [sort, setSort] = useState(params.get("sort") || "");

  const handleSubmit = () => {
    setParams({
      search,
      category,
      sort
    });
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sort</Form.Label>
          <Form.Control
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </Form.Group>

        <Button onClick={handleSubmit}>Apply</Button>
      </Form>

      <Alert variant="success">
        Category: {params.get("category")} <br />
        Sort: {params.get("sort")}
      </Alert>
    </>
  );
}