import { useWeb3React } from "@web3-react/core";
import "./App.css";
import { voteInstance } from "./Contracts";
import { useEffect, useState } from "react";

export const Vote = () => {
  const { active, library, account } = useWeb3React();
  const [candidateCount, setCandidateCount] = useState();
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    const getCount = async () => {
      const candidatesCount = await voteInstance(library)
        .methods.candidatesCount()
        .call();
      setCandidateCount(candidatesCount);

      const Voted = await voteInstance(library).methods.voters(account).call();
      setIsVoted(Voted);
    };
    if (active) {
      getCount();
    }
  }, [active, account, library]);

  const handleCandidateVote = async (candidateId: string) => {
    await voteInstance(library).methods.vote(candidateId).send({
      from: account,
    });
  };

  return (
    <div className="App">
      <div>Candidates Count:-{candidateCount}</div>
      {isVoted && <div>Already voted</div>}
      <div className="vote-container">
        <button className="button" onClick={() => handleCandidateVote("1")}>
          Vote Candidate 1
        </button>
        <button className="button" onClick={() => handleCandidateVote("2")}>
          Vote Candidate 2
        </button>
      </div>
    </div>
  );
};
