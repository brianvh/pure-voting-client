// <Voting /> component

export default ({React, Vote, Winner}) => (
  ({ pair = [], winner, ...props }) => (
    <div>
      {winner ?
        <Winner winner={winner} /> :
        pair.map(entry =>
          <Vote key={entry} entry={entry} { ...props } />
        )
      }
    </div>
  )
);
