import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Layout from "@/layouts/Layout";

import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import Search from "@/pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items/:id" element={<Detail />}></Route>
          <Route path="/items" element={<SearchWithQuery />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function SearchWithQuery() {
  const query = new URLSearchParams(useLocation().search);
  return <Search search={query.get("search") || ""} />;
}
