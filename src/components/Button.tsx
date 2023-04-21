interface IButton {
  onClick?: () => any;
  title: string;
  classes?: string;
}

const Button = (props: IButton) => {
  const { title, classes, onClick } = props;

  const handleButtonClick = () => {
    if (onClick) {
      console.log("clicked");
      onClick();
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`shadow-sm rounded-md text-white leading-relaxed px-2 bg-blue-500 hover:bg-blue-200 transform transition-colors ${classes}`}
    >
      {title}
    </button>
  );
};

export default Button;
