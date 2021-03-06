import React from "react";
import { Link } from "react-router-dom";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Avatar from "../../shared/Avatar";
import Image from "../../shared/Image";

const PostItem = ({
  post: {
    _id,
    createdAt,
    title,
    body,
    image,
    slug,
    author: { name, username, avatar }
  }
}) => {
  return (
    <Link
      to={{ pathname: `/posts/${slug}`, state: { id: _id } }}
      data-testid="post-link"
      className="shadow"
    >
      <div className="p-2">
        <div className="pb-2 border-b-t  flex items-center">
          <Avatar src={avatar} size={12} alt={title} />
          <div>
            <h3>{name || username}</h3>
            <p className="text-gray-600 text-xs">
              {distanceInWordsToNow(createdAt)} ago
            </p>
          </div>
        </div>
        <Image src={image} alt={title} height="200px" />
        <div className="px-1 mt-1">
          <h2 className="font-bold truncate text-gray-900">{title}</h2>
          <p className="text-gray-600 truncate text-xs">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
