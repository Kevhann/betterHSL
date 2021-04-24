import * as React from 'react';
import MainMenu from './components/MainMenu';
import SearchForm from './components/SearchForm';
import BackgroundMap from './components/BackgroundMap';
import './styles.css';
import './timeline.css';

export const App = () => {
  return (
    <>
      <MainMenu />
      <BackgroundMap />
      <SearchForm />
    </>
  );
};
