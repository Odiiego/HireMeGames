import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

import GameListContext from './context/GameListContext';
import useFetch from './hooks/useFetch';
import Home from './layout/Home';

function App() {
  const [userData, setUserData] = React.useState();
  const { data, error, loading, request } = useFetch();
  const { currentUser } = getAuth();

  // React.useEffect(() => {
  //   if (userData) {
  //     setDoc(doc(db, 'users', String(userData.uid)), {
  //       [userData.uid]: {
  //         ratings: userRatings,
  //         bookmarks: userBookmarks,
  //       },
  //     });
  //   }
  // }, [userRatings, userBookmarks]);

  // fetch dessa api maravilhosa
  React.useEffect(() => {
    request('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'dev-email-address': 'odiegopaula@gmail.com',
      },
    });
  }, []);

  //fetch dos dados da firestore
  React.useEffect(() => {
    const uid = currentUser ? currentUser.uid : 'user';
    const userPreferencesRef = doc(db, 'users', String(uid));

    getDoc(userPreferencesRef).then((userPreferences) => {
      setUserData(userPreferences.data()[uid]);
    });
  }, [currentUser]);

  return (
    <GameListContext.Provider
      value={{
        data,
        error,
        loading,
        userData,
        setUserData,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login"element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </GameListContext.Provider>
  );
}

export default App;
