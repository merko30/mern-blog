import Link from "next/link";

import Navigation from "./Navigation";

const Header = async () => (
  <header className="py-8">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="uppercase font-md tracking-widest">
        Blog
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;
