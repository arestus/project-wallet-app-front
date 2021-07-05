import React from 'react';
import Navigation from '../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';

const DashboardPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      {biggerThan767 ? (
        <div>
          <h2>DashboardPage tablet/desktop</h2>
          <Navigation />
        </div>
      ) : (
        <div>
          <h2>DashboardPage mobile</h2>
          <p>Navigation for mobile screen size</p>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
