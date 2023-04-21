import { Switch } from "@headlessui/react";

interface IYesNoSwitch {
  enabled: boolean;
  setEnabled: (value: any) => void;
}

export const YesNoSwitch = ({ enabled, setEnabled }: IYesNoSwitch) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-blue-300">Yes</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-green-700" : "bg-green-900"
        } relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${!enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <span className="text-xs text-blue-300">No</span>
    </div>
  );
};
