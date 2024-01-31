import React from "react";
import InputField from "../components/InputField";
const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  const TwentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const TwentyFourHoursAgoDate = TwentyFourHoursAgo.toISOString().slice(0, 10);
  const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10);
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10);
  // console.log(TwentyFourHoursAgoDate);
  // console.log(SevenDaysAgoDate);
  return (
    <div>
      <h4 className="text-lg font-bold  mb-2"> Date Of Posting </h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test1"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> Any
        </label>

        <InputField
          value={TwentyFourHoursAgoDate}
          title="Last 24 Hours"
          name="test1"
          handleChange={handleChange}
        />
        <InputField
          value={SevenDaysAgoDate}
          title="Last 7 days"
          name="test1"
          handleChange={handleChange}
        />
        <InputField
          value={ThirtyDaysAgoDate}
          title="last Month"
          name="test1"
          handleChange={handleChange}
        />
        {/* <InputField
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
        /> */}
      </div>
    </div>
  );
};

export default JobPostingData;
