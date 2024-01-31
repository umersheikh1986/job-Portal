import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
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
          value="london"
          title="London"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="brussels"
          title="Brussels"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="seattle"
          title="Seattle"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="san Francisco"
          title="San Francisco"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="madrid"
          title="Madrid"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="boston"
          title="Boston"
          name="test"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Location;
