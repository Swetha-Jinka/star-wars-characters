// // pages/FilmDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Stack, Heading, Text, Button } from '@chakra-ui/react';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const FilmDetailPage = () => {
//   const { id } = useParams();
//   const [film, setFilm] = useState(null);

//   useEffect(() => {
//     const fetchFilmDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/films/${id}/`);
//         setFilm(response.data);
//       } catch (error) {
//         console.error('Error fetching film details:', error);
//       }
//     };
//     fetchFilmDetail();
//   }, [id]);

//   if (!film) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Stack spacing={4}>
//       <Heading as="h1">{film.title}</Heading>
//       <Text>Episode ID: {film.episode_id}</Text>
//       <Text>Opening Crawl: {film.opening_crawl}</Text>
//       <Text>Director: {film.director}</Text>
//       <Text>Producer: {film.producer}</Text>
//       <Text>Release Date: {film.release_date}</Text>
//       <Link to="/">
//         <Button>Back to Home</Button>
//       </Link>
//     </Stack>
//   );
// };

// export default FilmDetailPage;




// pages/FilmDetailPage.js
// import React from 'react';
// import { Stack, Heading, Text, Box } from '@chakra-ui/react';

// const FilmDetailPage = ({ film }) => {
//   if (!film) {
//     return null;
//   }

//   return (
//     <Box borderWidth="1px" borderRadius="lg" className="film-details" p={4}>
//       <Stack spacing={4}>
//         <Heading as="h1">{film.title}</Heading>
//         <Text>Episode ID: {film.episode_id}</Text>
//         <Text>Opening Crawl: {film.opening_crawl}</Text>
//         <Text>Director: {film.director}</Text>
//         <Text>Producer: {film.producer}</Text>
//         <Text>Release Date: {film.release_date}</Text>
//       </Stack>
//     </Box>
//   );
// };

// export default FilmDetailPage;

import React from 'react';
import { Stack, Heading, Text, Box } from '@chakra-ui/react';

const FilmDetailPage = ({ film }) => {
  if (!film) {
    return null;
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" className="film-details" p={4}>
      <Stack spacing={4}>
        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
          {film.title}
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }}>Episode ID: {film.episode_id}</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }}>Opening Crawl: {film.opening_crawl}</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }}>Director: {film.director}</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }}>Producer: {film.producer}</Text>
        <Text fontSize={{ base: 'md', md: 'lg' }}>Release Date: {film.release_date}</Text>
      </Stack>
    </Box>
  );
};

export default FilmDetailPage;

 
