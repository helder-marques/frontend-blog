export const AuthorPost = ({ author }) => {
  if (!author) return null;

  return (
    <div className="flex flex-col items-center justify-center w-[200px] h-[120px]">
      <p>Autor:</p>

      <img
        className="w-[60px] h-auto rounded-full"
        src={author?.avatar || "/default-avatar.png"}
        alt=""
      />

      <p>{author?.name || "Usuário"}</p>
    </div>
  );
};