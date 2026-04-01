import { useContext, useEffect, useRef, useState } from "react";
import { useCRUD } from "../../../hooks/useCRUD";
import { AppContext } from "../../../AppProvider";
import { useLocation } from "react-router-dom";

export const Modal = () => {
  const { open, setOpen, selectedComment, isEdit } =
    useContext(AppContext);

  const { saveComment } = useCRUD();
  const refDialog = useRef(null);


  const location = useLocation();
  const post = location.state?.post;


  const [text, setText] = useState("");


  useEffect(() => {
    if (!refDialog.current) return;

    if (open) {
      refDialog.current.showModal();
    } else {
      refDialog.current.close();
    }
  }, [open]);

  
  useEffect(() => {
    if (!open) return;

    if (isEdit && selectedComment) {
      setText(selectedComment.text);
    } else {
      setText("");
    }
  }, [open, isEdit, selectedComment]);


  const handleSave = () => {
    if (!post) return;

    saveComment(text, setText, post.id);
  };

  return (
    <dialog
      ref={refDialog}
      className="rounded-lg shadow-lg w-[400px] max-w-full p-6 m-auto bg-[var(--color-navy)]"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-[var(--color-skyblue)]">
          {isEdit ? "Editar comentário" : "Novo comentário"}
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite seu comentário..."
          className="bg-[var(--color-lightblue)] w-full h-[100px] rounded-[20px] m-[10px] p-[10px]"
        />

        <div className="flex gap-3">
          <button
            className="w-[100px] h-[40px] bg-[var(--color-skyblue)] hover:bg-[var(--color-royal)] text-white rounded"
            onClick={handleSave}
          >
            Salvar
          </button>

          <button
            className="w-[100px] h-[40px] bg-gray-500 hover:bg-gray-700 text-white rounded"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
};