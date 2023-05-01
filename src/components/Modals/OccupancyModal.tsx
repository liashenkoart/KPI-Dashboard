import { CurrencyDollar } from "phosphor-react";
import { useState } from "react";
import { formatValue } from "react-currency-input-field";
import { useAppDispatch } from "../../lib/hooks";
import { addOccupancy } from "../../lib/slices/occupancySlice";
import { MONTHS } from "../../utils/data";
import CustomCurrencyInput from "../CustomCurrencyInput";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import { Select } from "../Select";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

type MonthSelect = { id: number; name: string };
type CurrencyValue = string | undefined;

export const OccupancyModal = () => {
  const dispatch = useAppDispatch();

  const [budgeted, setBudgeted] = useState<CurrencyValue>(undefined);
  const [occupancyNumbers, setOccupancyNumber] = useState<CurrencyValue>("");

  const [selectedMonth, setSelectedMonth] = useState<MonthSelect>(MONTHS[0]);

  const handleSaveOccupancy = () => {
    if (!budgeted || !occupancyNumbers || !selectedMonth) {
      toast.error("Fields cannot be empty!");
      return;
    }

    const occupancyPayload = {
      id: uuidv4(),
      budgeted: formatValue({ value: budgeted }),
      occupancyNumbers: formatValue({ value: occupancyNumbers }),
      comps: "",
      month: selectedMonth.name,
    };

    dispatch(addOccupancy(occupancyPayload));
    toast.success("Occupancy numbers added!");

    setBudgeted("");
    setOccupancyNumber("");
  };

  return (
    <div>
      <CustomModalTitle title="Occupancy" />
      <CustomModalBody>
        <form>
          <div>
            <label htmlFor="budgeted" className="form-label">
              Budgeted
            </label>
            <CustomCurrencyInput
              id="budgeted"
              name="budgeted"
              icon={<CurrencyDollar />}
              value={budgeted}
              onValueChange={(value) => setBudgeted(value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="occupancy" className="form-label">
              Occupancy Numbers
            </label>
            <CustomCurrencyInput
              id="occupancy"
              name="occupancy"
              icon={<CurrencyDollar />}
              value={occupancyNumbers}
              onValueChange={(value) => setOccupancyNumber(value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="month" className="form-label">
              Month
            </label>
            <Select
              value={selectedMonth}
              onChange={setSelectedMonth}
              data={MONTHS}
              direction="bottom"
            />
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter handleSave={handleSaveOccupancy} />
    </div>
  );
};
