import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import authOptions from "@/lib/authOptions";

import transformFormData from "@/utils/transformFormData";

import PostForm from "@/components/posts/PostForm";
import { Post } from "@prisma/client";

const CreatePost = () => {
  const onSubmit = (data: Partial<Post>) => {
    console.log(data);
  };

  return (
    <div className="lg:max-w-[600px]">
      <h1 className="text-2xl mb-8">What's on your mind?</h1>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePost;
