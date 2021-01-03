import React, { useEffect, useState } from "react";
import axios from "axios";
import Candidate from "./Candidate";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Candidates = (props) => {
  const { onCandidateClick } = props;
  const history = useHistory();

  const [candidates, setCandidates] = useState([]);
  const [isAPIError, setIsAPIError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onChange = (event) => setSearchText(event.target.value);

  const onClick = (candidate) => {
    onCandidateClick(candidate);
    history.push(`/${candidate.id}`);
  };

  const onShowShortlistedCandidates = () => history.push("/shortlisted");

  const onShowRejectedCandidates = () => history.push("/rejected");

  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((response) => setCandidates([...response.data]))
      .catch(() => setIsAPIError(true));
  }, []);

  return (
    <div>
      {!!candidates.length && (
        <>
          <div>
            <Search searchText={searchText} onChange={onChange} />
            <button type="button" onClick={onShowShortlistedCandidates}>
              Show Shortlisted Candidates
            </button>
            <button type="button" onClick={onShowRejectedCandidates}>
              Show Rejected Candidates
            </button>
          </div>
          {candidates.map((candidate) => (
            <Candidate
              key={candidate.id}
              candidate={candidate}
              searchText={searchText}
              onClick={onClick}
            />
          ))}
        </>
      )}

      {isAPIError && <>Something Went Wrong</>}
    </div>
  );
};

export default Candidates;
