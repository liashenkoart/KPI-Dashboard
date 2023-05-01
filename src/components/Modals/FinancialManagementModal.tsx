import {
  CurrencyCircleDollar,
  CurrencyDollar,
  CurrencyDollarSimple,
  User,
} from "phosphor-react";
import { useState } from "react";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import Input from "../Input";
import { YesNoSwitch } from "../YesNoSwitch";

export const FinancialManagementModal = () => {
  const [meetingBudget, setMeetingBudget] = useState(false);

  return (
    <>
      <CustomModalTitle title="Financial Management" />
      <CustomModalBody>
        <form>
          <div className="flex items-center justify-between gap-4">
            <label className="form-label">Meeting Budget?</label>

            <YesNoSwitch
              enabled={meetingBudget}
              setEnabled={setMeetingBudget}
            />
          </div>

          <div className="form-group flex items-center gap-4">
            <div className="flex-1">
              <label className="form-label" htmlFor="rentalRev">
                Rental Rev
              </label>
              <Input
                type="number"
                name="rentalRev"
                icon={<CurrencyCircleDollar />}
              />
            </div>

            <div className="flex-1">
              <label className="form-label" htmlFor="anciliaryIncome">
                Ancillary Income
              </label>
              <Input
                type="number"
                name="anciliaryIncome"
                icon={<CurrencyDollarSimple />}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="totalRev" className="form-label">
              Total Rev
            </label>
            <Input type="number" name="totalRev" icon={<CurrencyDollar />} />
          </div>

          <div className="form-group flex items-center gap-4">
            <div className="flex-1">
              <label htmlFor="admin" className="form-label">
                Admin
              </label>
              <Input type="text" name="admin" icon={<User weight="fill" />} />
            </div>

            <div className="flex-1">
              <label className="form-label" htmlFor="turnoverExp">
                Turnover exp.
              </label>
              <Input type="text" name="turnoverExp" />
            </div>
          </div>

          <div className="form-group flex items-center gap-4">
            <div className="flex-1">
              <label className="form-label" htmlFor="repair">
                Repair {"&"} Maint.
              </label>
              <Input type="text" name="repair" />
            </div>

            <div className="flex-1">
              <label className="form-label" htmlFor="noi">
                NOI
              </label>
              <Input type="number" name="noi" />
            </div>
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter
        hasCancelButton
        handleSave={() => alert("Saving...")}
      />
    </>
  );
};
