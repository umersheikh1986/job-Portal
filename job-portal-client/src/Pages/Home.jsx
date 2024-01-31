import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    setLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };
  console.log(query);

  // filter the jobs
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);
  // radio filtering
  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

  // button filtering
  const handleClick = (event) => {
    setselectedCategory(event.target.value);
  };

  // calculate index range
  const calculatePagerange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // function for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function
  // const filteredData = (jobs, selected, query) => {
  //   let filteredJobs = jobs;

  //   if (query) {
  //     filteredJobs = filteredItems;
  //   }

  //   if (selected) {
  //     filteredJobs = filteredJobs.filter(
  //       ({
  //         jobLocation,
  //         maxPrice,
  //         experienceLevel,
  //         salaryType,
  //         employmentType,
  //         postingDate,
  //       }) => {
  //         jobLocation.toLowerCase() === selected.toLowerCase() ||
  //           parseInt(maxPrice) === parseInt(selected) ||
  //           salaryType.toLowerCase() === selected.toLowerCase() ||
  //           employmentType.toLowerCase() === selected.toLowerCase();
  //       }
  //     );
  //   }

  //   return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  // };
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePagerange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">loading......</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              {" "}
              <h3 className="text-lg font-bold mb-2">
                {result.length} jobs
              </h3>{" "}
              <p>No Data Found! </p>{" "}
            </>
          )}
          {/* <Jobs result={result} />{" "} */}

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex  justify-center mt-4 space-x-8">
              {" "}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>{" "}
              <span className="mx-2">
                page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemPerPage)}
              </span>{" "}
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
