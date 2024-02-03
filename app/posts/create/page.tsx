import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import transformFormData from "@/utils/transformFormData";

const CreatePost = () => {
  async function createPost(formData: FormData) {
    "use server";

    // TODO: handle image
    const data = transformFormData(formData, ["title", "content"]);

    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({ ...data, authorId: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="lg:max-w-[600px] mx-auto pt-10">
      <h1 className="text-2xl mb-8">What's on your mind?</h1>
      <form action={createPost} className="flex flex-col gap-4">
        <Input name="title" />
        <Textarea name="content" rows={6} />
        <Input type="file" name="image" defaultValue={undefined} />
        <button type="submit">Save post</button>
      </form>
    </div>
  );
};

export default CreatePost;
