import React from 'react';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

import './Preferences.scss';
import GameListContext from '../context/GameListContext';

function Preferences({ id, bookmarked, rating }) {
  const { userData, setUserData } = React.useContext(GameListContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  function updateFirebase({ ratings, bookmarks }) {
    const uid = currentUser.uid;
    setDoc(doc(db, 'users', String(uid)), {
      [uid]: {
        ratings: ratings,
        bookmarks: bookmarks,
      },
    });
  }

  function handleRating({ target }) {
    if (!currentUser) {
      return navigate('/auth/login');
    }
    const newData = {
      bookmarks: [...userData.bookmarks],
      ratings: { ...userData.ratings, [id]: Number(target.value) },
    };
    setUserData(newData);
    updateFirebase(newData);
  }

  function handleBookmark() {
    if (!currentUser) {
      return navigate('/auth/login');
    }
    let newBookmarkedArray;

    if (bookmarked) {
      newBookmarkedArray = userData.bookmarks.filter((gameId) => gameId !== id);
    } else {
      newBookmarkedArray = [...userData.bookmarks, id];
      newBookmarkedArray.push(id);
    }
    const newData = {
      bookmarks: [...newBookmarkedArray],
      ratings: { ...userData.ratings },
    };
    setUserData(newData);
    updateFirebase(newData);
  }

  return (
    <span className="preferences">
      <button
        className={`rating${1 <= rating ? '--active' : ''}`}
        onClick={handleRating}
        value={1}
      ></button>
      <button
        className={`rating${2 <= rating ? '--active' : ''}`}
        onClick={handleRating}
        value={2}
      ></button>
      <button
        className={`rating${3 <= rating ? '--active' : ''}`}
        onClick={handleRating}
        value={3}
      ></button>
      <button
        className={`rating${4 <= rating ? '--active' : ''}`}
        onClick={handleRating}
        value={4}
      ></button>
      <button
        className={`bookmark${bookmarked ? '--active' : ''}`}
        onClick={handleBookmark}
      ></button>
    </span>
  );
}

export default Preferences;
