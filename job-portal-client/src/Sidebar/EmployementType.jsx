import React from "react";
import InputField from "../components/InputField";
const EmployementType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-bold  mb-2"> Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          value="full-time"
          title="Full-time"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="part-time"
          title="Part-time"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="temporary"
          title="Temporary"
          name="test"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EmployementType;
