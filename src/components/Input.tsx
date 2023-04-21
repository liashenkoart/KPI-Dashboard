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
    <div className="relative">
      <input
        {...props}
        className={`z-1 relative form-input rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:bg-transparent focus:z-10 sm:text-sm ${
          icon && iconPosition === "left" && "pl-8"
        } ${classes}`}
      />

      {icon && (
        <div
          className={`z-[3] absolute top-1/2 -translate-y-[50%] opacity-25 ${
            iconPosition === "left" ? "left-0 pl-2" : "right-0 pr-2"
          }`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
