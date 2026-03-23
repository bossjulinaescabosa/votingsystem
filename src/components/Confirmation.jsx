function Confirmation({ confirmVote }) {

  return (
    <div className="confirm-box">

      <p>Are you sure you want to submit your vote?</p>

      <button className="confirm-btn" onClick={confirmVote}>
        Confirm Vote
      </button>

    </div>
  )

}

export default Confirmation