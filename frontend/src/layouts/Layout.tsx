import { ReactNode } from "react";
import { Link } from "react-router";

import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={{
              pathname: `/`,
            }}
          >
            <img
              className="object-cover w-full rounded-t-lg h-9 md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://http2.mlstatic.com/storage/developers-site-cms-admin/DevImgs/230734061556-Mercado-Libre--2-.png"
              alt="Mercado Libre"
            />
          </Link>
          <SearchBar />
        </div>
        <div className="bg-gray-100">
          <NavBar />
        </div>
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
