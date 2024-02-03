"use client";

import { useFormState } from "react-dom";

import Input from "@/components/Input";

import { createUser } from "../actions";

const RegisterPage = () => {
  const [state, formAction] = useFormState(createUser, {
    error: null,
  });

  console.log(state);

  return (
    <div className="pt-10">
      <h1 className="text-2xl text-center mb-10">Join the community</h1>
      <form
        action={formAction}
        className="mx-auto lg:max-w-[600px] flex flex-col gap-4"
      >
        {state.error && (
          <div className="p-4 rounded-md border border-red-600 bg-red-200 text-red-600">
            {state.error}
          </div>
        )}
        <Input name="name" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
