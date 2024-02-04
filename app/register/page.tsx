"use client";

import { useFormState } from "react-dom";

import Input from "@/components/Input";

import { createUser } from "../actions";
import Alert from "@/components/Alert";

const RegisterPage = () => {
  const [state, formAction] = useFormState(createUser, {
    error: null,
  });

  return (
    <div>
      <h1 className="text-2xl text-center mb-10">Join the community</h1>
      <form
        action={formAction}
        className="mx-auto lg:max-w-[600px] flex flex-col gap-4"
      >
        {state.error && <Alert type="error">{state.error}</Alert>}
        <Input name="name" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
