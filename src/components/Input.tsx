import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classes?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = ({
  classes,
  icon,
  iconPosition = "left",
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={`relative form-input rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm ${classes}`}
    />
  );
};

export default Input;
