 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CharacterDetailPage.css';
import { Stack, Heading, Text, Button, Box, Flex } from '@chakra-ui/react';
import FilmDetailPage from './FilmDetailPage';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };
    fetchCharacterDetail();
  }, [id]);

  const handleFilmClick = async (filmUrl) => {
    try {
      const response = await axios.get(filmUrl);
      setSelectedFilm(response.data);
    } catch (error) {
      console.error('Error fetching film details:', error);
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Heading as="h1" className='heading'>SWAPI Person Details</Heading>
       <Flex direction="row" spacing={4} className="details-container">
      <Box flex="1" className="character-details">
        <Stack spacing={4} className="list character-details">
          <Heading as="h1">{character.name}</Heading>
          <Text>Height: {character.height}</Text>
          <Text>Mass: {character.mass}</Text>
          <Text>Gender: {character.gender}</Text>
          <Text>Hair Color: {character.hair_color}</Text>
          <Text>Skin Color: {character.skin_color}</Text>
          <Text>Eye Color: {character.eye_color}</Text>
          <Text>Birth Year: {character.birth_year}</Text>
          <Box  flex="1" className='character-details'>
          <Heading as="h2">Movies:</Heading>
          <Stack   spacing={2} className="film-list">
            {character.films.map((film, index) => (
              <Text
                as="li"
                key={index}
                className="film-link"
                onClick={() => handleFilmClick(film)}
              >
                Film {index + 1}
              </Text>
            ))}
          </Stack>
          </Box>
          <Link to="/" className="back-link" style={{ textDecoration: 'none' }}>
            <Button className="back-button">Back to Home</Button>
          </Link>
        </Stack>
      </Box>
      <Box flex="1" >
        {selectedFilm && <FilmDetailPage film={selectedFilm} />}
      </Box>
    </Flex>
    </div>
   
  );
};

export default CharacterDetailPage;
