function MovieCard({ title, year, isNominationCard, isNominated }) {
    console.log(isNominationCard)
    console.log(isNominated)
  if (!isNominationCard && !isNominated) {
      console.log('its not a nomination card and it is not nominated yet.')
    return (
      <li className="movieCard">
        <h1 className="title">{title}</h1>
        <h2 className="year">{year}</h2>
        <button className="btn Add">+</button>
      </li>
    );
  }
  if (!isNominationCard && isNominated) {
    console.log('its not a nomination card but it nominated already')
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
    console.log('The movie has been nominated and this element has a remove button.')
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
