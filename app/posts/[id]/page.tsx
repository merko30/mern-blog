async function getData(id: string) {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();

  return json;
}

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  const { post } = data;

  return <h1>{post.title}</h1>;
};

export default PostDetails;
