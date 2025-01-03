import { ReactNode } from "react";

import SearchBar from "@/components/SearchBar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="my-2">
        <SearchBar />
      </header>
      <main>
        <div className="bg-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://suabochica.com/" className="hover:underline">
              suabochica
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
