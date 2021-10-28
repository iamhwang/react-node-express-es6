import React from 'react';

import App from '../route/App';
import SideBar from './SideBar';
import Header from './Header';

export default function HomePage() {
  return (
    <>
      <SideBar />
      <Header />
      <App />
    </>
  );
}
