import { useState } from "react";
import { RETENTION_OFTEN, RETENTION_PROGRAMS } from "../../utils/data";
import { Select } from "../Select";
import { YesNoSwitch } from "../YesNoSwitch";

export const RetentionForm = () => {
  const [whichPrograms, setWhichPrograms] = useState(RETENTION_PROGRAMS[0]);
  const [programsOften, setProgramsOften] = useState(RETENTION_OFTEN[1]);

  const [programsInPlace, setProgramsInPlace] = useState(true);

  return (
    <form>
      <div className="form-group">
        <div className="flex items-center justify-between">
          <label htmlFor="programsInPlace" className="form-label mb-0">
            Retention programs in place?
          </label>
          <YesNoSwitch
            enabled={programsInPlace}
            setEnabled={setProgramsInPlace}
          />
        </div>

        {programsInPlace && (
          <div className="mt-2 flex items-center gap-4 w-full">
            <p className="form-label mb-0">Which?</p>
            <div className="w-full">
              <Select
                value={whichPrograms}
                data={RETENTION_PROGRAMS}
                onChange={setWhichPrograms}
              />
            </div>
          </div>
        )}
      </div>

      {programsInPlace && (
        <div className="form-group">
          <label htmlFor="programsOften" className="form-label">
            How often
          </label>

          <Select
            value={programsOften}
            data={RETENTION_OFTEN}
            onChange={setProgramsOften}
          />
        </div>
      )}
    </form>
  );
};
