import { useAppDispatch } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import Button from "./Button";

interface ICustomModalFooter {
  hasCancelButton?: boolean;
  saveButtonText?: string;
  classes?: string;
}

export const CustomModalFooter = ({
  hasCancelButton = true,
  saveButtonText = "Save",
  classes = "",
}: ICustomModalFooter) => {
  const dispatch = useAppDispatch();

  return (
    <footer
      className={`flex gap-3 items-center justify-end p-6 border-t-[1px] border-gray-200 ${classes}`}
    >
      {hasCancelButton && (
        <Button
          onClick={() => dispatch(toggleModal({ value: false, type: "" }))}
          title="Cancel"
          classes="text-xs py-2 px-6 bg-red-400"
        />
      )}

      <Button
        title={saveButtonText}
        classes="text-xs py-2 px-6 bg-green-800 hover:bg-green-900"
      />
    </footer>
  );
};
