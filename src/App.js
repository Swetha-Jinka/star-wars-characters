 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import { ChakraProvider } from '@chakra-ui/react'; 
import CharacterDetailPage from './pages/CharacterDetailPage';


function App() {
  return (
    <div className="App">
     
      <ChakraProvider> 
      <Router>
        <Routes> 
          <Route exact path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
      
    </div>
  );
}

export default App;




 