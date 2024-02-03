"use client";
import { signIn } from "next-auth/react";
import { ChangeEventHandler, FormEvent, useState } from "react";

import Input from "@/components/Input";
import Alert from "@/components/Alert";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState({
    email: "merim.hasanbegovic@outlook.com",
    password: "password",
  });

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await signIn("credentials", { redirect: false, ...data });

    console.log({ response });

    if (response?.error) {
      setError(response.error);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) =>
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));

  return (
    <div className="pt-10">
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
