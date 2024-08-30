/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // Import the useState hook from the react package
import axios from "axios";

import InteractiveCard from "../utils/widgets/InteractiveCard";
import AutoComplete from "../utils/widgets/AutoComplete";

const ProfileCard = () => {
  const [candidateData, setCandidateData] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState(null);
  

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await axios.get("http://localhost:3500/getcandidatename");
      console.log(data.data);
      setCandidateData(data.data);
    };
    fetchDataAsync();
  }, []);

  const filterUniqueByConstituency = (data) => {
    const uniqueConstituencies = {};
    return data.filter((candidate) => {
      const constituency = candidate.details.additionalDetails.constituency;
      if (!uniqueConstituencies[constituency]) {
        uniqueConstituencies[constituency] = true;
        return true;
      }
      return false;
    });
  };

  const uniqueConstituencies = filterUniqueByConstituency(candidateData).map(
    (candidate) => candidate.details.additionalDetails.constituency
  );

/*   const filterUniqueByName = (data) => {
    const uniqueNames = {};
    return data.filter((candidate) => {
      const name = candidate.name;
      if (!uniqueNames[name]) {
        uniqueNames[name] = true;
        return true;
      }
      return false;
    });
  };

  const uniqueNames = filterUniqueByName(candidateData).map(
    (candidate) => candidate.name
  ); */

  const uniqueCandidateData = filterUniqueByConstituency(candidateData);

  const filteredCandidates = selectedConstituency
    ? uniqueCandidateData.filter(
        (candidate) =>
          candidate.details.additionalDetails.constituency ===
          selectedConstituency
      )
    : uniqueCandidateData;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AutoComplete
          options={uniqueConstituencies}
          label="Search by Constituency"
          onChange={(event, newValue) => setSelectedConstituency(newValue)}
        />
      </div>

      <div className="profile">
        {filteredCandidates.map((candidate, index) => (
          <InteractiveCard onclick={() => {}}
            key={index}
            image={candidate.details.additionalDetails.photo}
            title={candidate.name}
            description={candidate.details.party}
            criminalCase={candidate.details.criminalCase}
            constituency={candidate.details.additionalDetails.constituency}
            selfProfession={candidate.details.additionalDetails.selfProfession}
            education={candidate.details.education}
            totalAssets={candidate.details.totalAssets}
            
          />
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
