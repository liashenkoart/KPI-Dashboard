import { useState } from "react";
import { MONTHS } from "../../utils/data";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import Input from "../Input";
import { Select } from "../Select";

type MonthSelect = { id: number; name: string };

export const OccupancyModal = () => {
  const [selectedMonth, setSelectedMonth] = useState<MonthSelect>(MONTHS[0]);

  return (
    <div>
      <CustomModalTitle title="Occupancy" />
      <CustomModalBody>
        <form>
          <div>
            <label htmlFor="budgeted" className="form-label">
              Budgeted
            </label>
            <Input type="number" id="budgeted" />
          </div>

          <div className="form-group">
            <label htmlFor="occupancy" className="form-label">
              Occupancy Numbers
            </label>
            <Input type="number" id="occupancy" />
          </div>

          <div className="form-group">
            <label htmlFor="month" className="form-label">
              Month
            </label>
            <Select
              value={selectedMonth}
              onChange={setSelectedMonth}
              data={MONTHS}
            />
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter />
    </div>
  );
};
