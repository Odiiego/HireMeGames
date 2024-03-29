import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

import GameListContext from './context/GameListContext';
import useFetch from './hooks/useFetch';
import Home from './layout/Home';
import Signup from './layout/Signup';
import Login from './layout/Login';

function App() {
  const [userData, setUserData] = React.useState();
  const [genreList, setGenreList] = React.useState(null);
  const [filter, setFilter] = React.useState({ genre: null, title: null });
  const [sortByRating, setSortByRating] = React.useState(false);
  const [sortingDirection, setSortingDirection] = React.useState(true);
  const [filterBookmarkedStatus, setFilterBookmarkedStatus] =
    React.useState(false);
  const { data, error, loading, request } = useFetch();
  const { currentUser } = getAuth();

  // fetch dessa api maravilhosa s2
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
        filter,
        setFilter,
        data,
        error,
        loading,
        genreList,
        setGenreList,
        userData,
        setUserData,
        sortByRating,
        setSortByRating,
        sortingDirection,
        setSortingDirection,
        filterBookmarkedStatus,
        setFilterBookmarkedStatus,
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
