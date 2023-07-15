import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

import GameListContext from '../context/GameListContext';

function useUpdateFirebase() {
  const { currentUser, userData } = React.useContext(GameListContext);

  setDoc(doc(db, 'users', String(userData.uid)), {
    [currentUser.uid]: {
      ratings: userData.ratings,
      bookmarks: userData.bookmarks,
    },
  });
}

export default useUpdateFirebase;
