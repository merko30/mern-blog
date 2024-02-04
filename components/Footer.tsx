import Link from "next/link";

const Footer = () => (
  <footer className="py-8">
    <div className="container mx-auto flex justify-between lg:max-w-[750px]">
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/login">About us</Link>
          </li>
          <li>
            <Link href="/register">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
