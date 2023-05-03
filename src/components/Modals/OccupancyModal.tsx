import { Info, Question } from "phosphor-react";
import { useState } from "react";
import {
  GOALS_OFTEN,
  LEADS_MANAGEMENT,
  MARKETING_SOURCE_AMOUNT,
  MARKETING_SOURCE_FREQUENCY,
  MOVE_OUT_REASONS,
  OCCUPANCY_MARKETING_SOURCES,
  ONLINE_RATING,
  ONSITE_MEMBERS,
  OVERSEE_PROCESS,
  RENEWALS_SENT,
  YTD,
} from "../../utils/data";
import { TSelect } from "../../utils/types";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import Input from "../Input";
import { Select } from "../Select";
import { YesNoSwitch } from "../YesNoSwitch";

export const OccupancyModal = () => {
  // Input and switch states
  const [inHouseMarketingDept, setInHouseMarketingDept] = useState(true);
  const [secretShopProgram, setSecretShopProgram] = useState(false);
  const [callCenterLeasingCalls, setCallCenterLeasingCalls] = useState(false);
  const [leadSystemInPlace, setLeadSystemInPlace] = useState(false);
  const [integrateWithManagement, setIntegrateWithManagement] = useState(false);
  const [goalsEstablished, setGoalsEstablished] = useState(false);

  // Dropdown states
  const [marketingSources, setMarketingSources] = useState([
    OCCUPANCY_MARKETING_SOURCES[0],
  ]);
  const [onsiteMember, setOnSiteMembers] = useState(ONSITE_MEMBERS[0]);
  const [ytdRetention, setYtdRetention] = useState(YTD[0]);
  const [ytdAverage, setYtdAverage] = useState(YTD[0]);
  const [renewalsSent, setRenewalsSent] = useState(RENEWALS_SENT[0]);
  const [onlineRating, setOnlineRating] = useState(ONLINE_RATING[0]);
  const [moveOutReasons, setMoveOutReasons] = useState([MOVE_OUT_REASONS[0]]);
  const [oftenLeadsManagement, setOftenLeadsManagement] = useState(
    LEADS_MANAGEMENT[0]
  );
  const [whoOverseeProcess, setWhoOverseeProcess] = useState(
    OVERSEE_PROCESS[0]
  );
  const [goalsOften, setGoalsOften] = useState(GOALS_OFTEN[0]);

  // Functions
  const handleMarketingSources = (
    value: TSelect,
    index: number,
    name: string
  ) => {
    const newState = [...marketingSources];
    newState[index] = {
      ...newState[index],
      [name]: value,
    };

    setMarketingSources(newState);
  };

  const handleMarketingSourcesData = (
    e: any,
    name: "leads" | "tours" | "closingRatio",
    mktIndex: number,
    dayIndex: number
  ) => {
    const newState = [...marketingSources];
    const prevArray = newState[mktIndex][name];
    prevArray[dayIndex] = e.target.value;

    newState[mktIndex] = {
      ...newState[mktIndex],
      [name]: prevArray,
    };

    setMarketingSources(newState);
  };

  return (
    <div>
      <CustomModalTitle title="Occupancy" />
      <CustomModalBody>
        <form>
          <div>
            <label className="form-label" htmlFor="">
              Enter actual and budgeted occupancy
            </label>
            <p>todo</p>
          </div>

          <div className="form-divider">
            <span className="form-portion">Marketing</span>
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between gap-4">
              <span className="form-label mb-0">In-house marketing dept?</span>
              <YesNoSwitch
                enabled={inHouseMarketingDept}
                setEnabled={setInHouseMarketingDept}
              />
            </div>

            {!inHouseMarketingDept && (
              <div className="flex items-center gap-4 form-cont">
                <span className="form-label mb-0 flex-1">Who’s managing? </span>
                <div className="w-full flex-[2]">
                  <Input type="text" icon={<Info />} />
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <span className="form-label">Marketing sources</span>
            <Select
              onChange={setMarketingSources}
              value={marketingSources}
              data={OCCUPANCY_MARKETING_SOURCES}
              isMultiple
              direction="bottom"
            />

            {marketingSources.length > 0 && (
              <div className="form-cont">
                <span className="form-label">Monthly cost </span>
                {marketingSources.map((mkt, index) => (
                  <div
                    key={mkt.id}
                    className="flex border-t border-b border-gray-100 items-start gap-2 justify-between py-4"
                  >
                    <span className="sticky underline flex-1 top-12 form-label mb-0">
                      {mkt.name}
                    </span>

                    <div className="flex-[3]">
                      <div>
                        <span className="form-label">Confirm frequency: </span>
                        <Select
                          onChange={(value: TSelect) =>
                            handleMarketingSources(
                              value,
                              index,
                              "confirmFrequency"
                            )
                          }
                          value={mkt.confirmFrequency}
                          data={MARKETING_SOURCE_FREQUENCY}
                        />
                      </div>

                      <div className="form-group">
                        <span className="form-label">Amount - k</span>
                        <Select
                          value={mkt.amount}
                          onChange={(value: TSelect) =>
                            handleMarketingSources(value, index, "amount")
                          }
                          data={MARKETING_SOURCE_AMOUNT}
                        />
                      </div>

                      <div className="form-group">
                        <span className="form-label font-bold">
                          Data for the past 30 days
                        </span>
                        <div className="flex items-center gap-2">
                          <div>
                            <span className="form-label">Total leads</span>
                            <Input
                              type="number"
                              value={mkt.leads[0]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "leads", index, 0)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Total tours</span>
                            <Input
                              type="number"
                              value={mkt.tours[0]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "tours", index, 0)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Closing ratio</span>
                            <Input
                              type="number"
                              value={mkt.closingRatio[0]}
                              onChange={(e) =>
                                handleMarketingSourcesData(
                                  e,
                                  "closingRatio",
                                  index,
                                  0
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <span className="form-label font-bold">
                          Data for the past 60 days
                        </span>
                        <div className="flex items-center gap-2">
                          <div>
                            <span className="form-label">Total leads</span>
                            <Input
                              type="number"
                              value={mkt.leads[1]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "leads", index, 1)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Total tours</span>
                            <Input
                              type="number"
                              value={mkt.tours[1]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "tours", index, 1)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Closing ratio</span>
                            <Input
                              type="number"
                              value={mkt.closingRatio[1]}
                              onChange={(e) =>
                                handleMarketingSourcesData(
                                  e,
                                  "closingRatio",
                                  index,
                                  1
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <span className="form-label font-bold">
                          Data for the past 90 days
                        </span>
                        <div className="flex items-center gap-2">
                          <div>
                            <span className="form-label">Total leads</span>
                            <Input
                              type="number"
                              value={mkt.leads[2]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "leads", index, 2)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Total tours</span>
                            <Input
                              type="number"
                              value={mkt.tours[2]}
                              onChange={(e) =>
                                handleMarketingSourcesData(e, "tours", index, 2)
                              }
                            />
                          </div>
                          <div>
                            <span className="form-label">Closing ratio</span>
                            <Input
                              type="number"
                              value={mkt.closingRatio[2]}
                              onChange={(e) =>
                                handleMarketingSourcesData(
                                  e,
                                  "closingRatio",
                                  index,
                                  2
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-divider">
            <span className="form-portion">Staffing</span>
          </div>

          <div className="form-group">
            <span className="form-label">How many onsite team members? </span>
            <Select
              direction="bottom"
              data={ONSITE_MEMBERS}
              value={onsiteMember}
              onChange={setOnSiteMembers}
            />
          </div>

          <div className="form-group">
            <div className="flex items-center justify-between gap-4">
              <span className="form-label">Secret shop program in place?</span>
              <YesNoSwitch
                enabled={secretShopProgram}
                setEnabled={setSecretShopProgram}
              />
            </div>

            {secretShopProgram && (
              <div className="form-cont">
                <span className="form-label">Enter stats for the last 3: </span>
              </div>
            )}
          </div>

          <div className="form-group">
            <div className="form-switch">
              <span className="form-label">
                Call center used to answer leasing calls?
              </span>
              <YesNoSwitch
                enabled={callCenterLeasingCalls}
                setEnabled={setCallCenterLeasingCalls}
              />
            </div>
          </div>

          <div className="form-group">
            <span className="form-label">Closing Ratio</span>
            <p>TODO</p>
          </div>

          <div className="form-divider">
            <span className="form-portion">Retention</span>
          </div>

          <div className="form-group">
            <div className="flex-inputs">
              <div className="flex-1">
                <span className="form-label">YTD retention %</span>
                <Select
                  data={YTD}
                  value={ytdRetention}
                  onChange={setYtdRetention}
                  direction="bottom"
                />
              </div>

              <div className="flex-1">
                <span className="form-label">YTD average increase</span>
                <Select
                  data={YTD}
                  value={ytdAverage}
                  onChange={setYtdAverage}
                  direction="bottom"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="flex-inputs">
              <div className="flex-1">
                <span className="form-label">How often are renewals sent?</span>
                <Select
                  data={RENEWALS_SENT}
                  value={renewalsSent}
                  onChange={setRenewalsSent}
                  direction="bottom"
                />
              </div>

              <div className="flex-1">
                <span className="form-label">Online star rating</span>
                <Select
                  data={ONLINE_RATING}
                  value={onlineRating}
                  onChange={setOnlineRating}
                  direction="bottom"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <span className="form-label">
              What are your top 3 move out reasons?
            </span>

            <Select
              data={MOVE_OUT_REASONS}
              isMultiple
              value={moveOutReasons}
              onChange={setMoveOutReasons}
              direction="bottom"
            />
          </div>

          <div className="form-divider">
            <span className="form-portion">Lead Management</span>
          </div>

          <div className="form-group">
            <div className="form-switch">
              <span className="form-label">
                Lead management system in place?
              </span>
              <YesNoSwitch
                enabled={leadSystemInPlace}
                setEnabled={setLeadSystemInPlace}
              />
            </div>

            {leadSystemInPlace && (
              <div className="form-cont">
                <div className="flex-inputs">
                  <span className="form-label mb-0">What system?</span>
                  <div className="w-full flex-1">
                    <Input icon={<Question />} />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-switch">
                    <span className="form-label mb-0">
                      Does it intergrate with your property management system?
                    </span>
                    <YesNoSwitch
                      enabled={integrateWithManagement}
                      setEnabled={setIntegrateWithManagement}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <span className="form-label">
                    How often are leads managed?
                  </span>
                  <Select
                    data={LEADS_MANAGEMENT}
                    value={oftenLeadsManagement}
                    onChange={setOftenLeadsManagement}
                    direction="bottom"
                  />
                </div>

                <div className="form-group">
                  <span className="form-label">Who oversees this process?</span>
                  <Select
                    data={OVERSEE_PROCESS}
                    value={whoOverseeProcess}
                    onChange={setWhoOverseeProcess}
                    direction="bottom"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <div className="form-switch">
              <span className="form-label">Are leasing goals established?</span>
              <YesNoSwitch
                enabled={goalsEstablished}
                setEnabled={setGoalsEstablished}
              />
            </div>

            {goalsEstablished && (
              <div className="form-cont">
                <div className="flex-inputs">
                  <span className="form-label mb-0">How often</span>
                  <div className="w-full flex-1">
                    <Select
                      data={GOALS_OFTEN}
                      value={goalsOften}
                      onChange={setGoalsOften}
                      direction="bottom"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter />
    </div>
  );
};
