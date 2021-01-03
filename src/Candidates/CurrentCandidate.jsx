import React from "react";
import CandidateCard from "./CandidateCard";
import "./Candidate.css";
import BackButton from "./BackButton";

const CurrentCandidate = (props) => {
  const {
    candidate,
    onShortlistClick,
    onRejectClick,
    selectionCriteria,
    onBackClick,
  } = props;

  return (
    <div className="candidateParent">
      <BackButton onBackClick={onBackClick} />
      <CandidateCard name={candidate?.name} image={candidate?.Image} />
      {!selectionCriteria && (
        <>
          <button type="button" onClick={onShortlistClick}>
            Shortlist
          </button>
          <button type="button" onClick={onRejectClick}>
            Reject
          </button>
        </>
      )}
      {selectionCriteria === "SHORTLISTED" && (
        <span>This Candidate is Shortlisted</span>
      )}
      {selectionCriteria === "REJECTED" && (
        <span>This Candidate is Rejected</span>
      )}
    </div>
  );
};

export default CurrentCandidate;
