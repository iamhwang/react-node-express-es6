import React from 'react';


import SideBar from '../objects/common/components/SideBar';
import Header from '../objects/common/components/Header';
import RoutePage from './RoutePage';


export default function HomePage() {
  return (
    <>
      <SideBar />
      <RoutePage />
      <Header />
    </>
  );
}
