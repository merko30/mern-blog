import Image from "@/components/Image";
import { Post } from "@/types/posts";

async function getData(id: string): Promise<{ post: Post }> {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();

  return json;
}

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  const { post } = data;

  return (
    <div className="lg:max-w-[700px] mx-auto">
      <h1 className="text-4xl mb-6">{post.title}</h1>
      <Image
        src={post.image!}
        alt={post.title}
        width={0}
        height={0}
        className="h-[400px] w-full mb-6"
      />
      <div className="flex items-center gap-4">
        <Image
          src={post.author.image}
          alt="author's avatar"
          width={0}
          height={0}
          className="w-[60px] h-[60px] rounded-full"
        />
        <div>
          <h3 className="text-md">
            {post.author.firstName ?? post.author.email}
          </h3>
          <h3 className="text-sm text-gray-500">Author's description</h3>
        </div>
      </div>
      <hr className="my-6" />
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
