import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;