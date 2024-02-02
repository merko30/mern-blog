import Link from "next/link";

const Header = () => (
  <header className="py-8">
    <div className="container mx-auto flex justify-between">
      <Link href="/" className="uppercase text-sm">
        Blog
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/login">Sign in</Link>
          </li>
          <li>
            <Link href="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
