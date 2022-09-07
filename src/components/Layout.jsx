import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';

function Layout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
