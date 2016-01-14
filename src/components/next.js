// <Next /> component

export default React => (
  ({ nextPair }) => (
    <div className="management">
      { nextPair ?
        <button className="next" onClick={nextPair}>
          Next
        </button> :
        ""
      }
    </div>
  )
);
