import React from 'react';
import './Bookmark.scss';
import GameListContext from '../context/GameListContext';

function Bookmark({ id }) {
  const { userBookmarks, setUserBookmarks, userData } =
    React.useContext(GameListContext);
  const [bookmarkStatus, setBookmarkStatus] = React.useState(false);

  React.useEffect(() => {
    if (userBookmarks.includes(id)) {
      setBookmarkStatus(true);
    }
  }, []);

  function handleClick() {
    if (!userData) return;
    setBookmarkStatus(!bookmarkStatus);
    const newBookmarks = bookmarkStatus
      ? userBookmarks.filter((bookmark) => bookmark !== id)
      : [...userBookmarks, id];
    console.log(newBookmarks);
    setUserBookmarks(newBookmarks);
  }

  return (
    <button
      className={`bookmark-btn${bookmarkStatus ? '--active' : ''}`}
      onClick={handleClick}
    ></button>
  );
}

export default Bookmark;
