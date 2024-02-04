"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navigation = () => {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {isLoading && (
          <>
            <li className="w-[100px] h-[20px] bg-gray-200" />
            <li className="w-[90px] h-[20px] bg-gray-200" />
          </>
        )}
        {!isLoading ? (
          !session ? (
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
            <>
              <li>Hello {session?.user?.email}</li>
              <li onClick={() => signOut()}>Logout</li>
            </>
          )
        ) : null}
      </ul>
    </nav>
  );
};

export default Navigation;
