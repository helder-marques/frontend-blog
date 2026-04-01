export const Textpost = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[20px]">{post.title}</h1>
      <p className="indent-10">{post.body}</p>
      <p>likes: {post.likes}</p>
    </div>
  );
};
