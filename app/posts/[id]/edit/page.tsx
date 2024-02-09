import { redirect } from "next/navigation";
import { Post } from "@prisma/client";

import PostForm from "@/components/posts/PostForm";

async function getData(id: string): Promise<{ post: Post }> {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();

  return json;
}

const EditPostPage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  const { post } = data || {};

  const onSubmit = async (data: Partial<Post>) => {
    "use server";

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "PUT",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      // revalidatePath("/");
      redirect(`/posts/${json.post.id}`);
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };

  if (post) {
    return (
      <>
        <h1 className="text-2xl mb-8">Edit your post</h1>
        <PostForm post={post} onSubmit={onSubmit} />
      </>
    );
  }
  return <h1>post not found</h1>;
};

export default EditPostPage;
