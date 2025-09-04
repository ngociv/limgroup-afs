import React, { useState } from 'react';
import './App.css';
import './styles/Components.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Click from './components/Click';
import LandingPage from './components/LandingPage';
import Campaign from './components/Campaign';
import Ads from './components/Ads';
import Rule from './components/Rule';
import Keyword from './components/Keyword';
import Niche from './components/Niche';
import Pixel from './components/Pixel';
import CreativeSet from './components/CreativeSet';
import AdAccount from './components/AdAccount';
import Advertiser from './components/Advertiser';
import Team from './components/Team';
import System from './components/System';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'click':
        return <Click />;
      case 'landing-page':
        return <LandingPage />;
      case 'campaign':
        return <Campaign />;
      case 'ads':
        return <Ads />;
      case 'rule':
        return <Rule />;
      case 'keyword':
        return <Keyword />;
      case 'niche':
        return <Niche />;
      case 'pixel':
        return <Pixel />;
      case 'creative-set':
        return <CreativeSet />;
      case 'ad-account':
        return <AdAccount />;
      case 'advertiser':
        return <Advertiser />;
      case 'team':
        return <Team />;
      case 'system':
        return <System />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      <div className="main-content">
        <div className="content-wrapper">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
