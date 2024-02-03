const Textarea = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => (
  <textarea
    {...props}
    className={`p-4 border border-gray-200 rounded ${className}`}
  />
);

export default Textarea;
