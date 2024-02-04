import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

import Image from "@/components/Image";

import authOptions from "@/lib/authOptions";

async function getData(): Promise<{ user: User }> {
  const session = await getServerSession(authOptions);

  console.log(session?.user);

  const response = await fetch(
    `http://localhost:3000/api/users/${session?.user!.id}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const json = await response.json();

  return json;
}

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getData();
  const { user } = data || {};

  return (
    <div>
      <div className="flex items-center gap-6">
        <Image
          src={user.image as string}
          alt="user's avatar"
          width={0}
          height={0}
          className="w-[140px] h-[140px] rounded-full"
        />
        <div>
          <h1 className="text-2xl">{user.email}</h1>
        </div>
      </div>
      <hr className="my-10" />
      {children}
    </div>
  );
};
export default ProfileLayout;
