interface IButton {
  onClick?: (value?: boolean) => any;
  children: React.ReactNode | string;
  classes?: string;
}

const Button = (props: IButton) => {
  const { children, classes, onClick } = props;

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`shadow-sm min-h-[20px] rounded-md text-white leading-relaxed p-2 bg-blue-500 hover:bg-blue-200 transform transition-colors ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
