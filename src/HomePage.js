 
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './HomePage.css';
// import { Stack, Heading, Text, Button,Box,IconButton,Table,  Thead, Tfoot,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   Flex,  
//   Tooltip,
//   Select,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper} from '@chakra-ui/react';
 
// // import { useTable, usePagination } from "react-table";
 
// import {
//   ArrowRightIcon,
//   ArrowLeftIcon,
//   ChevronRightIcon,
//   ChevronLeftIcon,
//   StarIcon,
// } from "@chakra-ui/icons"; 
 
// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const HomePage = () => {
//   const [characters, setCharacters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     fetchCharacters(currentPage);
//     loadFavorites();
//   }, [currentPage]);

//   const fetchCharacters = async (page) => {
//     try {
//       const response = await axios.get(`${SWAPI_BASE_URL}/people/?page=${page}`);
//       setCharacters(response.data.results);
//     } catch (error) {
//       console.error('Error fetching characters:', error);
//     }
//   };

//   const handlePagination = (page) => {
//     setCurrentPage(page);
//   };

//   const loadFavorites = () => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   };

//   const toggleFavorite = (character) => {
//     let updatedFavorites;
//     if (favorites.some((fav) => fav.name === character.name)) {
//       updatedFavorites = favorites.filter((fav) => fav.name !== character.name);
//     } else {
//       updatedFavorites = [...favorites, character];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   const isFavorite = (character) => {
//     return favorites.some((fav) => fav.name === character.name);
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (

//     <div className='Body'>
//        <Heading as="h1" className='MainHeading' >Star Wars Characters</Heading>
//       <Stack spacing={4} className="bgColor"> 
//       <TableContainer>
//         <Table variant="simple">
//           {/* <TableCaption >Star Wars Characters</TableCaption> */}
//           <Thead className='Thead'>
//             <Tr className='Thead'>
//               <Th>Name</Th>
//               <Th>Height</Th>
//               <Th>Mass</Th>
//               <Th>Gender</Th>
//               <Th>Hair Color</Th>
//               <Th>Skin Color</Th>
//               <Th>Eye Color</Th>
//               <Th>Birth Year</Th>
//               {/* <Th>Homeworld</Th>  */}
//               <Th>Created</Th>
//               <Th>Edited</Th>
//               <Th>Favorite</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {characters.map((character) => (
//               <Tr key={character.name} _hover={{ backgroundColor: 'gray.100' }}>
//                 <Td>
//                   <Link
//                     to={`/character/${character.url
//                       .split('/')
//                       .slice(-2, -1)[0]}`}
//                   >
//                     <Text as="span" textDecoration="underline">
//                       {character.name}
//                     </Text>
//                   </Link>
//                 </Td>
//                 <Td>{character.height}</Td>
//                 <Td>{character.mass}</Td>
//                 <Td>{character.gender}</Td>
//                 <Td>{character.hair_color}</Td>
//                 <Td>{character.skin_color}</Td>
//                 <Td>{character.eye_color}</Td>
//                 <Td>{character.birth_year}</Td>  
                
//                 <Td>{formatDate(character.created)}</Td>
//                 <Td>{formatDate(character.edited)}</Td>

//                 <Td>
//                   <IconButton
//                     icon={<StarIcon />}
//                     onClick={() => toggleFavorite(character)}
//                     colorScheme={isFavorite(character) ? 'yellow' : 'gray'}
//                     aria-label="Toggle Favorite"
//                   />
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
      
//     </Stack>
//     <Stack direction="row" spacing={2} justifyContent="center" className='Navbtn'>
//         <Button
//           onClick={() => handlePagination(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button onClick={() => handlePagination(currentPage + 1)}>Next</Button>
//       </Stack>
//     </div>
    
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import NextLink from 'next/link';

import { 
  Stack, Heading, Text, Button, Box, IconButton, Table, Thead, Tfoot,
  Tbody, Tr, Th, Td, TableCaption, TableContainer, Flex, Tooltip,
  Select, NumberInput, NumberInputField, NumberInputStepper,
  NumberIncrementStepper, NumberDecrementStepper 
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon, StarIcon } from "@chakra-ui/icons";

const SWAPI_BASE_URL = 'https://swapi.dev/api';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchCharacters(currentPage);
    loadFavorites();
  }, [currentPage]);

  const fetchCharacters = async (page) => {
    try {
      const response = await axios.get(`${SWAPI_BASE_URL}/people/?page=${page}`);
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const loadFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  };

  const toggleFavorite = (character) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.name === character.name)) {
      updatedFavorites = favorites.filter((fav) => fav.name !== character.name);
    } else {
      updatedFavorites = [...favorites, character];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (character) => {
    return favorites.some((fav) => fav.name === character.name);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='Body'>
      <Heading as="h1" className='MainHeading'>Star Wars Characters</Heading>
      <Stack spacing={4} className="bgColor"> 
        <TableContainer>
          <Table variant="simple">
            <Thead className='Thead'>
              <Tr className='Thead'>
                <Th>Name</Th>
                <Th>Height</Th>
                <Th>Mass</Th>
                <Th>Gender</Th>
                <Th>Hair Color</Th>
                <Th>Skin Color</Th>
                <Th>Eye Color</Th>
                <Th>Birth Year</Th>
                <Th>Created</Th>
                <Th>Edited</Th>
                <Th>Favorite</Th>
              </Tr>
            </Thead>
            <Tbody>
              {characters.map((character) => (
                <Tr key={character.name} _hover={{ backgroundColor: 'gray.100' }}>
                  <Td>
                    <Link
                      to={`/character/${character.url.split('/').slice(-2, -1)[0]}`}
                    >
                      <Text as="span" textDecoration="underline">
                        {character.name}
                      </Text>
                    </Link>
                  </Td>
                  <Td>{character.height}</Td>
                  <Td>{character.mass}</Td>
                  <Td>{character.gender}</Td>
                  <Td>{character.hair_color}</Td>
                  <Td>{character.skin_color}</Td>
                  <Td>{character.eye_color}</Td>
                  <Td>{character.birth_year}</Td>  
                  <Td>{formatDate(character.created)}</Td>
                  <Td>{formatDate(character.edited)}</Td>
                  <Td>
                    <IconButton
                      icon={<StarIcon />}
                      onClick={() => toggleFavorite(character)}
                      colorScheme={isFavorite(character) ? 'yellow' : 'gray'}
                      aria-label="Toggle Favorite"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} spacing={2} justifyContent="center" className='Navbtn'>
        <Button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button onClick={() => handlePagination(currentPage + 1)}>Next</Button>

        <Link href="/about">
  <a>About Page</a>
</Link>
      </Stack>
    </div>
  );
};

export default HomePage;

