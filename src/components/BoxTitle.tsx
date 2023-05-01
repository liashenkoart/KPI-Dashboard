import { Plus } from "phosphor-react";
import { useAppDispatch } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import Button from "./Button";

interface IBoxTitle {
  title: string;
  buttonTitle?: string;
  hasButton?: boolean;
  modalType?: string;
}

export const BoxTitle = (props: IBoxTitle) => {
  const { title, buttonTitle, hasButton = false, modalType } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between">
      <h2 className="box-title">{title}</h2>
      {hasButton && (
        <Button
          onClick={() =>
            dispatch(toggleModal({ value: true, type: modalType || title }))
          }
        >
          {buttonTitle ? buttonTitle : <Plus />}
        </Button>
      )}
    </div>
  );
};
