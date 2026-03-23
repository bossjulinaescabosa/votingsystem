function Results({ candidates }) {

  return (
    <div className="results">

      <h2>Live Results</h2>

      {candidates.map((c)=>(
        <div className="result-item" key={c.id}>
          <span>{c.name}</span>
          <span>{c.votes} votes</span>
        </div>
      ))}

    </div>
  )

}

export default Results