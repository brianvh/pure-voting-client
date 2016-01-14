// <Vote /> component

export default React => (
  ({ entry, vote = () => {}, hasVoted }) => (
    <div>
      <button disabled={!!hasVoted}
              onClick={() => vote(entry)}>
        <h1>{entry}</h1>
        {entry === hasVoted ?
          <div className="label">Voted</div> :
          null
        }
      </button>
    </div>
  )
);
