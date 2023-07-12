import React from 'react';
import GameListContext from '../context/GameListContext';
import './Stars.scss';

function Stars({ id }) {
  const { userRatings, setUserRatings, userData } =
    React.useContext(GameListContext);
  const [rating, setRating] = React.useState(0);

  React.useEffect(() => {
    if (userData && userRatings[id]) {
      setRating(userRatings[id]);
    }
  }, [rating]);

  function handleClick({ target }) {
    if (!userData) return;
    const newRatings = { ...userRatings, [id]: Number(target.value) };

    setRating(Number(target.value));
    setUserRatings(newRatings);
  }

  return (
    <fieldset className="star-container">
      <input
        className={`star-rating${1 <= rating ? '--active' : ''}`}
        onClick={handleClick}
        type="radio"
        name={`${id}-rating`}
        value="1"
      />
      <input
        className={`star-rating${2 <= rating ? '--active' : ''}`}
        onClick={handleClick}
        type="radio"
        name={`${id}-rating`}
        value="2"
      />
      <input
        className={`star-rating${3 <= rating ? '--active' : ''}`}
        onClick={handleClick}
        type="radio"
        name={`${id}-rating`}
        value="3"
      />
      <input
        className={`star-rating${4 <= rating ? '--active' : ''}`}
        onClick={handleClick}
        type="radio"
        name={`${id}-rating`}
        value="4"
      />
    </fieldset>
  );
}

export default Stars;
