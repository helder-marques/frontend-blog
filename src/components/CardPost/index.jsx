import { useNavigate } from "react-router";
import { http } from "../../api/api";
import { useState } from "react";

export const CardPost = ({ post }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(post.likes);

  if (!post) return null;

  const selectCard = () => {
    navigate(`/card/${post.slug}`, { state: { post } });
  };

  const handleLike = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const { data } = await http.post(
        `blog-posts/${post.id}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setLike(data.likes);
    } catch (error) {
      console.error("Erro ao dar like:", error);
    }
  };

  return (
    <li className="flex flex-col p-4 bg-[var(--color-navy)] w-[400px] h-[500px] text-[var(--color-skyblue)] justify-between items-center rounded-[20px] hover:bg-[var(--color-royal)] hover:text-amber-50 gap-4 shadow-lg transition-colors">
      <img
        onClick={selectCard}
        className="rounded-[20px] cursor-pointer w-[400px] h-[150px] object-cover"
        src={post.cover}
        alt={post.title}
      />

      <h1 className="text-[24px] font-bold text-center">{post.title}</h1>

      <p className="indent-4 text-[16px] line-clamp-3">{post.body}</p>

      <button
        className="bg-[var(--color-indigo)] w-[100px] h-[40px] rounded-[20px] border-2 hover:bg-[var(--color-navy)] text-gray-300"
        onClick={handleLike}
      >
        Like
      </button>

      <p className="text-[16px]">Likes: {like}</p>
    </li>
  );
};