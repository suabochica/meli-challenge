import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "@/layouts/Layout";

import Home from "@/pages/Home";
import ItemDetails from "@/pages/ItemDetails";
import SearchResults from "@/pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items/:id" element={<ItemDetails />}></Route>
          <Route path="/items" element={<SearchResults />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
