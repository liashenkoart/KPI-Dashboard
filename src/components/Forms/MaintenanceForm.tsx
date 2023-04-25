import { CurrencyDollar, Hash, Percent } from "phosphor-react";
import { useState } from "react";
import {
  AVERAGE_TIME_MAINTENANCE,
  MAINTENANCE_ADVANCE,
  WORK_ORDERS_SUBMITTED,
} from "../../utils/data";
import Input from "../Input";
import { Select } from "../Select";
import { YesNoSwitch } from "../YesNoSwitch";

export const MaintenanceForm = () => {
  const [averageTime, setAverageTime] = useState(AVERAGE_TIME_MAINTENANCE[0]);
  const [workOrdersSubmited, setWorkOrdersSubmited] = useState(
    WORK_ORDERS_SUBMITTED[0]
  );
  const [howAdvance, setHowAdvance] = useState(MAINTENANCE_ADVANCE[0]);

  const [openWorkOrders, setOpenWorkOrders] = useState("");
  const [offersSent, setOffersSent] = useState(false);

  return (
    <form>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex-1">
          <label htmlFor="openWorkOrders" className="form-label">
            Open work orders
          </label>
          <Input
            value={openWorkOrders}
            onChange={(e) => setOpenWorkOrders(e.target.value)}
            type="number"
            icon={<Hash />}
          />
        </div>

        <div className="flex-[2]">
          <label htmlFor="averageTime" className="form-label">
            Average time for work order completion
          </label>
          <Select
            value={averageTime}
            onChange={setAverageTime}
            data={AVERAGE_TIME_MAINTENANCE}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="workOrdersSubmited" className="form-label">
          # of work orders submitted within 48 hours of move in:
        </label>

        <Select
          value={workOrdersSubmited}
          onChange={setWorkOrdersSubmited}
          data={WORK_ORDERS_SUBMITTED}
        />
      </div>

      <div className="form-group">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="offersSent" className="form-label mb-0">
            Are renewals offers sent to residents?
          </label>

          <YesNoSwitch enabled={offersSent} setEnabled={setOffersSent} />
        </div>

        {offersSent && (
          <div className="flex items-center gap-4 mt-4">
            <label htmlFor="offersSent" className="form-label mb-0 flex-[1.5]">
              How far in advance?
            </label>
            <div className="w-full flex-1">
              <Select
                value={howAdvance}
                onChange={setHowAdvance}
                data={MAINTENANCE_ADVANCE}
                direction="bottom"
              />
            </div>
          </div>
        )}
      </div>

      <div className="form-group">
        <div className="flex flex-col gap-4">
          <p className="form-label mb-0">
            Average renewal increase (both $ and %)
          </p>
          <div className="flex-1 flex gap-3">
            <Input
              type="number"
              name="averageRenewalCurrency"
              icon={<CurrencyDollar />}
            />
            <Input
              type="number"
              name="averageRenewalPercentage"
              icon={<Percent />}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
