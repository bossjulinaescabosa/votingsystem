function CandidateList({ candidates, selectedCandidate, selectCandidate }) {

  return (
    <div>

      {candidates.map((candidate)=>(
        <div className="card" key={candidate.id}>

          <div className="candidate">
            <input
              type="radio"
              name="candidate"
              checked={selectedCandidate === candidate.id}
              onChange={()=>selectCandidate(candidate.id)}
            />

            {candidate.name}
          </div>

        </div>
      ))}

    </div>
  )

}

export default CandidateList