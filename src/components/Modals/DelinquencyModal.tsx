import { Hash } from "phosphor-react";
import { useState } from "react";
import {
  DELIQUENCY_TOOLS,
  FOLLOW_RESPONSIBLE,
  FOLLOW_WEEKLY,
} from "../../utils/data";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import Input from "../Input";
import { Select } from "../Select";
import { YesNoSwitch } from "../YesNoSwitch";

export const DelinquencyModal = () => {
  const [weeklyFollow, setWeeklyFollow] = useState(FOLLOW_WEEKLY[0]);
  const [followUpResponsible, setFollowUpResponsible] = useState(
    FOLLOW_RESPONSIBLE[0]
  );
  const [notesWrittenWhere, setNotesWrittenWhere] = useState(
    DELIQUENCY_TOOLS[0]
  );
  const [evictionsTracked, setEvictionsTracked] = useState(DELIQUENCY_TOOLS[3]);

  const [tenantAttorneyEngaged, setTenantAttorneyEngaged] = useState(true);
  const [lateFeesChargedMonthly, setLateFeesChargedMonthly] = useState(false);
  const [monthlyEvictionFilings, setMonthlyEvictionFillings] = useState(true);
  const [areNotesWritten, setAreNotesWritten] = useState(false);

  return (
    <>
      <CustomModalTitle title="Delinquency" />
      <CustomModalBody>
        <form>
          <div>
            <label htmlFor="deliquentResidents" className="form-label">
              Delinquent residents
            </label>
            <Input type="text" icon={<Hash />} id="deliquentResidents" />
          </div>

          <div className="form-group">
            <label htmlFor="weeklyFollow" className="form-label">
              Number of follow up’s weekly
            </label>

            <Select
              value={weeklyFollow}
              data={FOLLOW_WEEKLY}
              onChange={setWeeklyFollow}
            />
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between">
              <label htmlFor="attorneyEngaged" className="form-label mb-0">
                Landlord Tenant attorney engaged?
              </label>
              <YesNoSwitch
                enabled={tenantAttorneyEngaged}
                setEnabled={setTenantAttorneyEngaged}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between">
              <label htmlFor="FeesChargedMonthly" className="form-label mb-0">
                Late fees charged monthly?
              </label>
              <YesNoSwitch
                enabled={lateFeesChargedMonthly}
                setEnabled={setLateFeesChargedMonthly}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between">
              <label htmlFor="FeesChargedMonthly" className="form-label mb-0">
                Monthly eviction filings?
              </label>
              <YesNoSwitch
                enabled={monthlyEvictionFilings}
                setEnabled={setMonthlyEvictionFillings}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="weeklyFollow" className="form-label">
              Who’s responsible for following up?
            </label>

            <Select
              value={followUpResponsible}
              data={FOLLOW_RESPONSIBLE}
              onChange={setFollowUpResponsible}
              direction="bottom"
            />
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between">
              <label htmlFor="notesWrittenAnywhere" className="form-label mb-0">
                Are follow up notes written anywhere?
              </label>
              <YesNoSwitch
                enabled={areNotesWritten}
                setEnabled={setAreNotesWritten}
              />
            </div>

            {areNotesWritten && (
              <div className="mt-2 flex items-center gap-4 w-full">
                <p className="form-label mb-0">Where?</p>
                <div className="w-full">
                  <Select
                    value={notesWrittenWhere}
                    data={DELIQUENCY_TOOLS}
                    onChange={setNotesWrittenWhere}
                    direction="bottom"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="evictionTracked" className="form-label">
              How are evictions monitored/tracked?
            </label>

            <Select
              value={evictionsTracked}
              data={DELIQUENCY_TOOLS}
              onChange={setEvictionsTracked}
              direction="bottom"
            />
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter />
    </>
  );
};
