import { Listbox, Transition } from "@headlessui/react";
import { CaretDoubleDown, Check } from "phosphor-react";
import { Fragment } from "react";

type Value = {
  id?: number;
  name: number | string;
};

interface ISelect {
  value: Value | Value[];
  onChange: any;
  data: Value[];
  direction?: "top" | "bottom";
  isMultiple?: boolean;
  name?: string;
}

export const Select = ({
  value,
  onChange,
  data,
  direction = "top",
  isMultiple = false,
  name,
}: ISelect) => {
  return (
    <Listbox
      value={value}
      onChange={onChange}
      multiple={isMultiple}
      name={name ? name : undefined}
    >
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm border border-gray-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          {!value ? (
            <span>Select an option...</span>
          ) : (
            <span className="block truncate">
              {isMultiple && Array.isArray(value)
                ? value.map((val) => val.name).join(", ")
                : /* @ts-ignore */
                  value.name}
            </span>
          )}

          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDoubleDown />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
              direction === "bottom" ? "bottom-full" : "top-full"
            }`}
          >
            {data.map((value, valueIdx) => (
              <Listbox.Option
                key={valueIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-pink-100 text-pink-900" : "text-gray-900"
                  }`
                }
                value={value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {value.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Check />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
