// <Results /> component

export default ({React, Entry, Next, Winner}) => (
  ({ tally = {}, winner, ...props }) => (
    winner ?
    <Winner winner={winner} /> :
    <div className="results">
      {Object.keys(tally).map(entry =>
        <Entry key={entry} name={entry} count={tally[entry]} />
      )}
      <Next {...props} />
    </div>
  )
);
