"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {!session ? (
          <>
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
          </>
        ) : (
          <li>Hello {session?.user?.email}</li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
