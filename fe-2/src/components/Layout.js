import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Click from './Click';
import LandingPage from './LandingPage';
import Campaign from './Campaign';
import Ads from './Ads';
import Rule from './Rule';
import Pixel from './Pixel';
import CreativeSet from './CreativeSet';
import AdAccount from './AdAccount';
import Advertiser from './Advertiser';
import Team from './Team';

const Layout = () => {
  const [activePage, setActivePage] = useState('Click');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Click':
        return <Click />;
      case 'Landing Page':
        return <LandingPage />;
      case 'Campaign':
        return <Campaign />;
      case 'Ads':
        return <Ads />;
      case 'Rule':
        return <Rule />;
      case 'Pixel':
        return <Pixel />;
      case 'Creative Set':
        return <CreativeSet />;
      case 'Ad Account':
        return <AdAccount />;
      case 'Advertiser':
        return <Advertiser />;
      case 'Team':
        return <Team />;
      default:
        return <Click />;
    }
  };

  return (
    <div className="layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-layout">
        <Header activePage={activePage} />
        {renderActivePage()}
      </div>
    </div>
  );
};

export default Layout;
