import Link from "next/link";

const Header = () => (
  <header className="py-8">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="uppercase font-md tracking-widest">
        Blog
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/login" className="text-sm font-md uppercase">
              Sign in
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-sm font-md uppercase">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
