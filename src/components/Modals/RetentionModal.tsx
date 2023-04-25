import { Tab } from "@headlessui/react";
import { RETENTION_TABS } from "../../utils/data";
import { classNames } from "../../utils/helpers";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import { MaintenanceForm } from "../Forms/MaintenanceForm";
import { RetentionForm } from "../Forms/RetentionForm";

export const RetentionModal = () => {
  return (
    <div>
      <CustomModalTitle title="Retention" />
      <CustomModalBody>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-600 p-1">
            {RETENTION_TABS.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-5">
            <Tab.Panel>
              <RetentionForm />
            </Tab.Panel>
            <Tab.Panel>
              <MaintenanceForm />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </CustomModalBody>
      <CustomModalFooter hasCancelButton />
    </div>
  );
};
