import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../src/components/Input";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("senha");

    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-lightblue)]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md p-8 bg-[var(--color-navy)] text-[var(--color-skyblue)] rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <Input name="email" type="email" placeholder="Digite seu e-mail">
          E-mail
        </Input>

        <Input name="senha" type="password" placeholder="Digite sua senha">
          Senha
        </Input>

        <button
          type="submit"
          className="bg-[var(--color-royal)] w-full h-[45px] rounded-[20px] border-2 hover:bg-[var(--color-indigo)] transition-colors font-semibold cursor-pointer"
        >
          Entrar
        </button>

        <p className="text-sm text-center mt-4 text-[var(--color-lightblue)]">
          Não tem uma conta?{" "}
          <Link
            to="/"
            className="font-semibold text-[var(--color-skyblue)] hover:text-[var(--color-indigo)] transition-colors"
          >
            Cadastre-se aqui
          </Link>
        </p>
      </form>
    </div>
  );
};
