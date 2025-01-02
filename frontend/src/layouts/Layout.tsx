import { ReactNode } from "react";

import SearchBar from "@/components/SearchBar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10">
      <header>
        <SearchBar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
