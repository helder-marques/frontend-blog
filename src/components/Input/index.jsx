export const Input = ({ name, children, ...props }) => {
  return (
    <div className="flex gap-4 w-[100%] justify-center">
      <label htmlFor={name}>{children}</label>
      <input
        name={name}
        {...props}
        className="bg-white w-[300px] h-[30px] rounded-[20px]  pl-2"
      />
    </div>
  );
};
