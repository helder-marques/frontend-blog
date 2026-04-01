import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { http } from "../src/api/api";

export const useCRUD = () => {
  const { setComments, selectedComment, isEdit, setOpen } =
    useContext(AppContext);

  const saveComment = async (text, setText, postId) => {
    try {
      if (!isEdit) {
        const { data } = await http.post(`comments/post/${postId}`, { text });

        setComments((prev) => [data, ...prev]);
      } else {
        const { data } = await http.patch(`comments/${selectedComment.id}`, {
          text,
        });

        setComments((prev) =>
          prev.map((c) => (c.id === selectedComment.id ? data : c)),
        );
      }

      setText("");
      setOpen(false);
    } catch (error) {
      console.error("Erro ao salvar comentário:", error);
    }
  };

  const deleteComments = async (id) => {
    try {
      await http.delete(`comments/${id}`);

      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
    }
  };

  return {
    saveComment,
    deleteComments,
  };
};
