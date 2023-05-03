import { At, CurrencyDollar, House, Pencil } from "phosphor-react";
import { useState } from "react";
import CustomCurrencyInput from "../CustomCurrencyInput";
import { CustomModalBody } from "../CustomModalBody";
import { CustomModalFooter } from "../CustomModalFooter";
import { CustomModalTitle } from "../CustomModalTitle";
import Input from "../Input";

export const PrelimQuestionsModal = () => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [managementCompany, setManagementCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [unitCounts, setUnitCounts] = useState("");
  const [downUnits, setDownUnits] = useState("");
  const [ner, setNer] = useState("");

  return (
    <div>
      <CustomModalTitle title="Questions" />
      <CustomModalBody>
        <form>
          <div>
            <span className="form-label">Property Name</span>
            <Input
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              icon={<Pencil />}
            />
          </div>

          <div className="form-group">
            <span className="form-label">Property Address</span>
            <Input
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              icon={<House />}
            />
          </div>

          <div className="form-group">
            <span className="form-label">Property Type</span>
            <Input />
          </div>

          <div className="form-group">
            <span className="form-label">Year built</span>
            <Input type="number" min="1900" max="2099" step="1" value="2022" />
          </div>

          <div className="form-group">
            <span className="form-label">Management Company Label</span>
            <Input />
          </div>

          <div className="form-group">
            <span className="form-label">Website</span>
            <Input type="url" icon={<At />} />
          </div>

          <div className="form-group">
            <span className="form-label">Unit Count</span>
            <Input type="number" />
          </div>

          <div className="form-group">
            <span className="form-label">Down units</span>
            <Input type="number" />
          </div>

          <div className="form-group">
            <span className="form-label">Net Effective Rent (NER)</span>
            <CustomCurrencyInput icon={<CurrencyDollar />} />
          </div>
        </form>
      </CustomModalBody>
      <CustomModalFooter />
    </div>
  );
};
