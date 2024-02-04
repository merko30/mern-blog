import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import authOptions from "@/lib/authOptions";

import transformFormData from "@/utils/transformFormData";

import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

const CreatePost = () => {
  async function createPost(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions);

    // TODO: handle image
    const data = transformFormData(formData, ["title", "content"]);

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({ ...data, authorId: session?.user?.id }),
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
  }

  return (
    <div className="lg:max-w-[600px] mx-auto pt-10">
      <h1 className="text-2xl mb-8">What's on your mind?</h1>
      <form action={createPost} className="flex flex-col gap-4">
        <Input name="title" />
        <Textarea name="content" rows={6} />
        <Input type="file" name="image" />
        <button type="submit">Save post</button>
      </form>
    </div>
  );
};

export default CreatePost;
