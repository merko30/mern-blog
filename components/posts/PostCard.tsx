import { formatDistance } from "date-fns/formatDistance";

import { Post } from "@/types/posts";

import Image from "../Image";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <div key={post.id} className="shadow-sm radius-sm">
    <div className="w-full h-[200px] relative">
      <Image src={post.image!} fill placeholder="empty" alt={post.title} />
    </div>
    <div className="py-3 px-2">
      <h1 className="text-sm font-medium">{post.title}</h1>
      <p className="text-gray-800 text-sm">{post.content}</p>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src={post.author.avatar}
          alt={post.author.email}
          width={0}
          height={0}
          className="rounded-full w-[45px] h-[45px]"
        />
        <div>
          <h2 className="text-sm font-medium">John Doe</h2>
          <p className="text-xs text-gray-700">
            {formatDistance(post.createdAt, Date.now(), { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
