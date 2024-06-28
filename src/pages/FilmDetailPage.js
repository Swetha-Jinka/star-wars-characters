 
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

 
