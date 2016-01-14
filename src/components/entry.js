// <Entry /> component

export default React => (
  ({name, count = 0}) => {
    if (!name) return <div></div>;

    return (
      <div className="entry">
        <h1>{name}</h1>
        <div className="voteCount">{count}</div>
      </div>
    );
  }
);
