import { useAppDispatch } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import Button from "./Button";

interface ICustomModalFooter {
  hasCancelButton?: boolean;
  saveButton?: React.ReactNode | string;
  classes?: string;
  handleSave?: () => any;
}

export const CustomModalFooter = ({
  hasCancelButton = true,
  saveButton = "Save",
  handleSave,
  classes = "",
}: ICustomModalFooter) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (handleSave) {
      handleSave();
    }
  };

  return (
    <footer
      className={`flex gap-3 items-center justify-end p-6 border-t-[1px] border-gray-200 ${classes}`}
    >
      {hasCancelButton && (
        <Button
          onClick={() => dispatch(toggleModal({ value: false, type: "" }))}
          classes="text-xs py-2 px-6 bg-red-400"
        >
          Cancel
        </Button>
      )}

      <Button
        onClick={handleClick}
        classes="text-xs py-2 px-6 bg-green-800 hover:bg-green-900"
      >
        {saveButton}
      </Button>
    </footer>
  );
};
