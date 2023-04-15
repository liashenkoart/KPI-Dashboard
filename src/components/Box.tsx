interface IBox {
  children: React.ReactNode;
  classes?: string;
}

export const Box = ({ children, classes }: IBox) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm py-5 px-[18px] h-full ${classes}`}
    >
      {children}
    </div>
  );
};
