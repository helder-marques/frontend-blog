import { useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider";
import { useLocation } from "react-router";
import { http } from "../../src/api/api";
import { AuthorPost } from "../../src/components/AuthorPost";
import { Textpost } from "../../src/components/TextPost";
import { Comments } from "../../src/components/Comments";
import { Markdown } from "../../src/components/Markdown";
import { Modal } from "../../src/components/Modal";
import { Header } from "../../src/components/Header";

export const CardDetails = () => {
  const { setComments, setSelectedComment, setIsEdit, setOpen, comments } =
    useContext(AppContext);

  const location = useLocation();
  const post = location.state?.post;

  useEffect(() => {
    if (!post) return;

    const fetchComments = async () => {
      try {
        const { data } = await http.get(`/comments/post/${post.id}`);
        setComments(data);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      }
    };

    fetchComments();
  }, [post, setComments]);

  const abrirModal = () => {
    setSelectedComment(null);
    setIsEdit(false);
    setOpen(true);
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-semibold">Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-lightblue)] flex flex-col">
      <Header />

      <main className="flex flex-col items-center px-6 py-12 bg-[var">
        <article className="w-full max-w-4xl bg-[var(--color-skyblue)] rounded-2xl shadow-lg overflow-hidden ">
          {/* Imagem de capa */}
          <img
            src={post.cover}
            alt={`Capa do post ${post.title}`}
            className="w-full h-[400px] object-cover"
          />

          {/* Conteúdo do post */}
          <div className="p-8">
            {/* Título */}
            <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-4">
              {post.title}
            </h1>

            {/* Autor e data */}
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <img
                src={post.author.avatar}
                alt={`Avatar de ${post.author.name}`}
                className="w-12 h-12 rounded-full object-cover shadow"
              />
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm italic">
                  @{post.author.username} •{" "}
                  {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Corpo do post */}
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              {post.body}
            </p>

            {/* Markdown (ex.: código, citações, etc.) */}
            <div className="prose prose-lg max-w-none mb-8">
              <Markdown>{post.markdown}</Markdown>
            </div>

            {/* Likes */}
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <span className="font-semibold">{post.likes}</span>
              <span>curtidas</span>
            </div>

            {/* Botão de comentário */}
            <button
              className="px-6 py-2 rounded-full bg-[var(--color-royal)] hover:bg-[var(--color-indigo)] text-white font-semibold transition-colors"
              onClick={abrirModal}
            >
              + Adicionar comentário
            </button>

            <Modal />

            {/* Seção de comentários */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-navy)]">
                Comentários
              </h2>
              <ul className="flex flex-col gap-6">
                {comments.length > 0 ? (
                  comments.map((c) => <Comments key={c.id} comment={c} />)
                ) : (
                  <p className="text-gray-600 italic">
                    Nenhum comentário ainda.
                  </p>
                )}
              </ul>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};
