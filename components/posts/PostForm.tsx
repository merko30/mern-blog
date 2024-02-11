"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

import Input from "../Input";
import Textarea from "../Textarea";
import { useSession } from "next-auth/react";

interface PostFormProps {
  post?: Post;
  type?: "create" | "edit";
}

const PostForm = ({ type = "create", post }: PostFormProps) => {
  const [data, setData] = useState(
    post ?? { title: "", content: "", image: "" }
  );

  const router = useRouter();

  const { data: session } = useSession();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, content } = data;

    const isEditMode = type === "edit" && post;
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts${isEditMode ? `/${post!.id}` : ""}`,
        {
          method: isEditMode ? "PUT" : "POST",
          body: JSON.stringify({
            title,
            content,
            ...(isEditMode ? {} : { authorId: session!.user!.id }),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      const id = json.post.id;

      router.push(`/posts/${id}`);
      revalidatePath(`/posts/${id}`);
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setData((old) => ({ ...old, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input name="title" value={data.title} onChange={onChange} />
      <Textarea
        name="content"
        value={data.content}
        onChange={onChange}
        rows={6}
      />
      <Input
        type="file"
        name="image"
        value={data.image ?? ""}
        onChange={onChange}
      />
      <button type="submit">Save post</button>
    </form>
  );
};

export default PostForm;
