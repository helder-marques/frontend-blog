import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../src/components/Input";
import { Link } from "react-router-dom";

function Register() {
  const { register } = useAuth();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("nome");
    const email = formData.get("email");
    const password = formData.get("senha");

    await register(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-lightblue)]">
      <form
        onSubmit={handleSubmitRegister}
        className="flex flex-col gap-6 w-full max-w-md p-8 bg-[var(--color-navy)] text-[var(--color-skyblue)] rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Registrar</h1>

        <Input name="nome" type="text" placeholder="Digite seu nome">
          Nome
        </Input>

        <Input name="email" type="email" placeholder="Digite seu e-mail">
          E-mail
        </Input>

        <Input name="senha" type="password" placeholder="Digite sua senha">
          Senha
        </Input>

        <button
          type="submit"
          className="bg-[var(--color-royal)] w-full h-[45px] rounded-[20px] border-2 hover:bg-[var(--color-indigo)] transition-colors font-semibold text-white"
        >
          Registrar
        </button>

        <p className="text-sm text-center mt-4 text-[var(--color-lightblue)]">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="font-semibold text-[var(--color-skyblue)] hover:text-[var(--color-indigo)] transition-colors"
          >
            Faça login aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
