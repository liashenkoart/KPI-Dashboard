interface ICustomModalBody {
  children: React.ReactNode;
  classes?: string;
}

export const CustomModalBody = ({ children, classes }: ICustomModalBody) => {
  return (
    <div className={`p-6 max-h-96 overflow-auto ${classes}`}>{children}</div>
  );
};
