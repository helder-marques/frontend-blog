import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const submitLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <header className="bg-[var(--color-navy)] shadow-md">
      <nav className="max-w-6xl mx-auto h-[80px] flex justify-between items-center px-8">
        <Link
          to="/home"
          className="text-[var(--color-skyblue)] text-3xl font-bold tracking-wide hover:text-[var(--color-lightblue)] transition-colors"
        >
          MeuBlog
        </Link>

        <ul className="flex gap-6 items-center text-[var(--color-lightblue)] font-medium">
          <li>
            <Link
              to="/home"
              className="px-4 py-2 rounded-full hover:bg-[var(--color-skyblue)] hover:text-[var(--color-navy)] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
          
         
            <button
              onClick={submitLogout}
              className="px-4 py-2 rounded-full bg-[var(--color-royal)] hover:bg-[var(--color-indigo)] text-white transition-colors"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
