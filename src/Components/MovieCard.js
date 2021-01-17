function MovieCard({ title, year, isNominationCard, isNominated }) {
  if (!isNominationCard && !isNominated) {
    return (
      <li className="movieCard">
        <h1 className="title">{title}</h1>
        <h2 className="year">{year}</h2>
        <button className="btn Add">+</button>
      </li>
    );
  }
  if (!isNominationCard && isNominated) {
    return (
      <li className="movieCard">
        <h1 className="title">{title}</h1>
        <h2 className="year">{year}</h2>
        {/* No button greyed out */}
        {/* <button className="btn Add">+</button> */}
      </li>
    );
  }
  if(isNominationCard){
    return (
        <li className="movieCard">
          <h1 className="title">{title}</h1>
          <h2 className="year">{year}</h2>
          <button className="btn remove">+</button>
        </li>
    );
  }
}

export default MovieCard;
