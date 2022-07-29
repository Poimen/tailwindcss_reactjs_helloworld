import React from 'react';
import DemoSection from './components/DemoSection';
import FooterNav from './components/FooterNav';
import HeroSection from './components/HeroSection';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div>
        <main>
          <TopNavBar />
          <HeroSection />
          <DemoSection />
          <FooterNav />
        </main>
      </div>
  );
}

export default App;
