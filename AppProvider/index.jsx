import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        open,
        setOpen,
        isEdit,
        setIsEdit,
        comments,
        setComments,
        selectedComment,
        setSelectedComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};