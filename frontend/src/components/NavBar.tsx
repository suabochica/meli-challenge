export default function NavBar() {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-yellow-300 p-6">
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-language"
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-whited">
          <li>
            <a
              href="/"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Categorías
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
            >
              Ofertas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
            >
              Supermercado
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Moda
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
