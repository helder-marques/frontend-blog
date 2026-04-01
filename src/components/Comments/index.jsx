import { useContext } from "react";
import { AppContext } from "../../../AppProvider";
import { useCRUD } from "../../../hooks/useCRUD";

export const Comments = ({ comment }) => {
  const { setOpen, setSelectedComment, setIsEdit } = useContext(AppContext);
  const { deleteComments } = useCRUD();

  if (!comment) return null;

  const handleEdit = () => {
    setSelectedComment(comment);
    setIsEdit(true);
    setOpen(true);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este comentário?")) {
      deleteComments(comment.id);
    }
  };

  return (
    <li className="flex items-start gap-4 w-full">
      {/* Autor */}
      <div className="flex flex-col items-center w-[120px]">
        <img
          src={comment.author?.avatar}
          alt={`Avatar de ${comment.author?.name || "Usuário"}`}
          className="w-[40px] h-[40px] rounded-full object-cover shadow-md"
        />
        <h3 className="mt-2 text-sm font-semibold text-gray-800">
          {comment.author?.name || "Usuário"}
        </h3>
      </div>

      {/* Texto do comentário */}
      <div className="flex-1 bg-[var(--color-navy)] text-[var(--color-lightblue)] p-4 rounded-[20px] shadow-md">
        <p className="text-sm mb-3">{comment.text}</p>

        {/* Data do comentário */}
        {comment.createdAt && (
          <span className="block text-xs text-gray-400 mb-2">
            {new Date(comment.createdAt).toLocaleString("pt-BR")}
          </span>
        )}

        {/* Ações */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleEdit}
            className="px-3 py-1 rounded bg-[var(--color-skyblue)] hover:bg-[var(--color-royal)] text-white text-sm transition-colors"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 rounded bg-red-500 hover:bg-red-700 text-white text-sm transition-colors"
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
