import React, { useEffect } from 'react';
import Home from './Home';

const Index: React.FC = () => {
  useEffect(() => {
    // This effect can be used to initialize any required resources for the home page
    document.title = "Kaagazz - Transforming Waste into Sustainable Paper";
  }, []);

  return <Home />;
};

export default Index;
