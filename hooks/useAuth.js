import { useNavigate } from "react-router-dom";
import { http } from "../src/api/api";

export const useAuth = () => {
  const navigate = useNavigate();

  // LOGIN
  const login = async (email, password) => {
    try {
      const { data } = await http.post(
        "auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } },
      );

      localStorage.setItem("access_token", JSON.stringify(data.access_token));

      navigate("/home");
    } catch (error) {
      console.log("Erro ao fazer login:", error);
      alert("Email ou senha inválidos");
    }
  };

  // REGISTER
  const register = async (name, email, password) => {
    try {
      await http.post(
        "auth/register",
        { email, password, name },
        { headers: { "Content-Type": "application/json" } },
      );

      navigate("/login");
    } catch (error) {
      console.log("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar");
    }
  };

  return { login, register };
};
