import { useEffect, useState } from "react";
import { http } from "../../src/api/api";
import { CardPost } from "../../src/components/CardPost";
import { Header } from "../../src/components/Header";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await http.get("blog-posts");
        setPosts(data);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-lightblue)]">
      <Header></Header>

      <main className="flex flex-col items-center px-8 py-20">
        <h1 className="text-5xl font-extrabold text-[var(--color-navy)] mb-6">
          Descubra nossos artigos
        </h1>
        <p className="text-lg text-[var(--color-indigo)] mb-16 text-center max-w-2xl">
          Conteúdos sobre tecnologia, programação e desenvolvimento para você se
          inspirar e aprender.
        </p>

        {loading ? (
          <p className="text-[var(--color-navy)] text-lg animate-pulse">
            Carregando posts...
          </p>
        ) : posts.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-12 w-full ">
            {posts.map((post) => (
              <CardPost key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 italic">Nenhum post encontrado.</p>
        )}
      </main>
    </div>
  );
};
