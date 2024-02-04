import Link from "next/link";

import Navigation from "./Navigation";

const Header = async () => (
  <header className="py-8">
    <div className="container mx-auto px-4 md:px-0 flex items-center justify-between lg:max-w-[750px]">
      <Link href="/" className="uppercase font-md tracking-widest">
        Blog
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;
