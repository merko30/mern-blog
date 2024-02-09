"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "@prisma/client";

import Input from "../Input";
import Textarea from "../Textarea";

interface PostFormProps {
  onSubmit: (data: Partial<Post>) => void;
  post?: Post;
}

const PostForm = ({ onSubmit: onSubmitProp, post }: PostFormProps) => {
  const [data, setData] = useState(
    post ?? { title: "", content: "", image: "" }
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitProp(data);
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
