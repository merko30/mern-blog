const Input = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => (
  <input
    {...props}
    className={`p-4 border border-gray-200 rounded ${className}`}
  />
);

export default Input;
