import { Dialog } from "@headlessui/react";
import { X } from "phosphor-react";
import { useAppDispatch } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import Button from "./Button";

interface ICustomModalTitle {
  title: string;
}

export const CustomModalTitle = ({ title }: ICustomModalTitle) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between p-6 border-b-[1px] border-gray-200">
      <Dialog.Title as="h2" className="text-lg font-bold text-blue-500">
        {title}
      </Dialog.Title>
      <Button onClick={() => dispatch(toggleModal({ value: false, type: "" }))}>
        <X />
      </Button>
    </div>
  );
};
