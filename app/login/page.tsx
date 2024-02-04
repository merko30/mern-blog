"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEvent, useState } from "react";

import Input from "@/components/Input";
import Alert from "@/components/Alert";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [data, setData] = useState({
    email: "merim.hasanbegovic@outlook.com",
    password: "password",
  });

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await signIn("credentials", { redirect: false, ...data });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/");
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) =>
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));

  return (
    <div>
      <h1 className="text-2xl text-center mb-10">Welcome back</h1>
      <form
        onSubmit={login}
        className="mx-auto lg:max-w-[600px] flex flex-col gap-4"
      >
        {error && <Alert type="error">{error}</Alert>}
        <Input
          value={data.email}
          onChange={onChange}
          name="email"
          type="email"
        />
        <Input
          value={data.password}
          onChange={onChange}
          name="password"
          type="password"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
