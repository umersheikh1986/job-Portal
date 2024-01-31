import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const UpdateJob = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    CompanyName,
    MinPrice,
    MaxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();
  const [selectedOptions, setselectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated successfully!");
        }
        reset();
      });
  };
  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "CSS", label: "Css" },
    { value: "HTML", label: "HTML" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
    { value: "tailwindCss", label: "tailwindCss" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> JobTtile </label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="Create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Company Name</label>
              <input
                type="text"
                {...register("CompanyName")}
                placeholder="Ex:Microsoft"
                defaultValue={CompanyName}
                className="Create-job-input"
              />
            </div>
          </div>
          {/* 2nd Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Minimum Salary </label>
              <input
                type="text"
                placeholder="$20k"
                {...register("MinPrice")}
                defaultValue={MinPrice}
                className="Create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Maximum Salary</label>
              <input
                type="text"
                {...register("MaxPrice")}
                placeholder="$120k"
                defaultValue={MaxPrice}
                className="Create-job-input"
              />
            </div>
          </div>
          {/* 3rd Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Salary Type </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                {...register("jobLocation")}
                defaultValue={jobLocation}
                placeholder="Ex:New York"
                className="Create-job-input"
              />
            </div>
          </div>
          {/* 4rth Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-03"
                {...register("postingDate")}
                defaultValue={postingDate}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Experience Level </label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">Hourly</option>
                <option value="Intership">Intership</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>
          {/* 5th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <label className="block mb-2 text-lg">Required Skills Sets</label>
            <CreatableSelect
              onChange={setselectedOptions}
              options={options}
              isMulti
              className="create-job-input py-4 "
              defaultValue={skills}
            />
          </div>
          {/* 6th Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste Your Company Logo URL: https://weShare.com/img2"
                {...register("companyLogo")}
                defaultValue={companyLogo}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg"> Employement Type </label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* 7th Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              {...register("description")}
              rows={6}
              placeholder="Job Description"
              defaultValue={description}
            />
          </div>
          {/* last Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By </label>
            <input
              type="email"
              placeholder="Your email address"
              {...register("postedBy")}
              defaultValue={postedBy}
              className="create-job-input"
            />
          </div>
          <input
            type="submit"
            className="block  mt-12 bg-blue text-white font-semibold py-2 px-8 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
