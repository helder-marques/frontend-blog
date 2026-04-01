export const Markdown = ({ children }) => {
  return (
    <div className="bg-[var(--color-navy)] text-[var(--color-lightblue)] w-full h-[200px] p-4 rounded-[10px]">
      <p>{children}</p>
    </div>
  );
};
