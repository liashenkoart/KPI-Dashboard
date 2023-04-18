interface IBox {
  children: React.ReactNode;
  classes?: string;
}

export const Box = ({ children, classes }: IBox) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-5 h-full min-h-[250px] lg:min-h-[198px] xl:min-h-[220px] overflow-y-hidden overflow-x-auto ${classes}`}
    >
      {children}
    </div>
  );
};
