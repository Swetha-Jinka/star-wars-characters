 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CharacterDetailPage from './CharacterDetailPage';
import { ChakraProvider } from '@chakra-ui/react'; 

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




 