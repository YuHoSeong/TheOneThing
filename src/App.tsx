import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticationView from './views/AuthenticationView';
import Main from './views/Main';
import NavigationBar from './views/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth" element={<AuthenticationView />}></Route>
      </Routes>
    </>
  );
}

export default App;
