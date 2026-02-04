interface InputProps {
  name: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: string;
}

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    className="w-full rounded-md border border-green-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
  />
);
export default Input;