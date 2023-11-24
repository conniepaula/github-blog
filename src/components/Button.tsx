interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

function Button(props: ButtonProps) {
  const { children, icon, iconPosition = "start", ...rest } = props;
  return (
    <button
      className={`rounded-md bg-slate-700 px-3 py-2 ${
        !!icon && "flex items-center justify-center gap-2"
      } ${iconPosition === "start" ? "flex-row" : "flex-row-reverse"}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
