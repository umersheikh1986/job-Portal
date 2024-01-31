import React from "react";
import InputField from "../components/InputField";
const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-bold  mb-2"> Work Experience</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> Any Experience
        </label>

        <InputField
          value="intership"
          title="Intership"
          name="test"
          handleChange={handleChange}
        />
        <InputField
          value="work remotely"
          title="Work remotely"
          name="test"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
