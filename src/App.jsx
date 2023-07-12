import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import GameListContext from './context/GameListContext';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import useFetch from './hooks/useFetch';
import Signup from './layout/Signup';
import Login from './layout/Login';
import Home from './layout/Home';

function App() {
  const { data, error, loading, request } = useFetch();
  const [filteredData, setFilteredData] = React.useState(data);
  const [userRatings, setUserRatings] = React.useState({});
  const [userBookmarks, setUserBookmarks] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  const [dataStatus, setDataStatus] = React.useState(false);

  const { currentUser } = getAuth();
  React.useEffect(() => {
    setUserData(currentUser);
  }, [currentUser]);

  async function getUserData(user) {
    const uid = user ? user.uid : 'user';
    const userPreferencesRef = doc(db, 'users', String(uid));
    const userPreferencesDoc = await getDoc(userPreferencesRef);
    const userPreferences = userPreferencesDoc.data()[uid];
    return userPreferences;
  }

  React.useEffect(() => {
    getUserData(userData).then(({ ratings, bookmarks }) => {
      setUserRatings(ratings);
      setUserBookmarks(bookmarks);
      setDataStatus(true);
    });
  }, [userData]);

  React.useEffect(() => {
    if (userData) {
      setDoc(doc(db, 'users', String(userData.uid)), {
        [userData.uid]: {
          ratings: userRatings,
          bookmarks: userBookmarks,
        },
      });
    }
  }, [userRatings, userBookmarks]);

  React.useEffect(() => {
    request('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'dev-email-address': 'odiegopaula@gmail.com',
      },
    });
  }, []);

  return (
    <GameListContext.Provider
      value={{
        data,
        userData,
        dataStatus,
        error,
        userRatings,
        userBookmarks,
        setUserBookmarks,
        setUserRatings,
        loading,
        filteredData,
        setFilteredData,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GameListContext.Provider>
  );
}

export default App;
