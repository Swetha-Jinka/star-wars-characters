// // pages/CharacterDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Stack, Heading, Text } from '@chakra-ui/react';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const CharacterDetailPage = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     const fetchCharacterDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };
//     fetchCharacterDetail();
//   }, [id]);

//   if (!character) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Stack spacing={4}>
//       <Heading as="h1">{character.name}</Heading>
//       <Text>Height: {character.height}</Text>
//       <Text>Mass: {character.mass}</Text>
//       <Text>Gender: {character.gender}</Text>
//       <Heading as="h2">Movies:</Heading>
//       <Stack as="ul" spacing={2}>
//         {character.films.map((film, index) => (
//           <Text as="li" key={index}>{film}</Text>
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default CharacterDetailPage;



// pages/CharacterDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Stack, Heading, Text } from '@chakra-ui/react';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const CharacterDetailPage = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     const fetchCharacterDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };
//     fetchCharacterDetail();
//   }, [id]);

//   if (!character) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Stack spacing={4}>
//       <Heading as="h1">{character.name}</Heading>
//       <Text>Height: {character.height}</Text>
//       <Text>Mass: {character.mass}</Text>
//       <Text>Gender: {character.gender}</Text>
//       <Heading as="h2">Movies:</Heading>
//       <Stack as="ul" spacing={2}>
//         {character.films.map((film, index) => (
//           <Text as="li" key={index}>{film}</Text>
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default CharacterDetailPage;



// pages/CharacterDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import   './CharacterDetailPage.css';
// import { Stack, Heading, Text, Button } from '@chakra-ui/react';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const CharacterDetailPage = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     const fetchCharacterDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };
//     fetchCharacterDetail();
//   }, [id]);

//   if (!character) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='details'>
//          <Stack spacing={4} className='list'>
//       <Heading as="h1">{character.name}</Heading>
//       <Text>Height: {character.height}</Text>
//       <Text>Mass: {character.mass}</Text>
//       <Text>Gender: {character.gender}</Text>
//       <Heading as="h2">Movies:</Heading>
//       <Stack as="ul" spacing={2}>
//       <Link to="/" style={{ textDecoration: 'none' }}>
//       {character.films.map((film, index) => (
//           <Text as="li" key={index}>{film}</Text>
//         ))}
//       </Link> 
//       </Stack>
//       <Link to="/" style={{ textDecoration: 'none' }}>
//         <Button>
//           Back to Home
//         </Button>
//       </Link>
//     </Stack>
//     </div>
   
//   );
// };

// export default CharacterDetailPage;
//this is actual code working 


// pages/CharacterDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Stack, Heading, Text, Button, Box } from '@chakra-ui/react';
// import FilmDetailPage from './FilmDetailPage';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const CharacterDetailPage = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);
//   const [selectedFilm, setSelectedFilm] = useState(null);

//   useEffect(() => {
//     const fetchCharacterDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };
//     fetchCharacterDetail();
//   }, [id]);

//   const handleFilmClick = async (filmUrl) => {
//     try {
//       const response = await axios.get(filmUrl);
//       setSelectedFilm(response.data);
//     } catch (error) {
//       console.error('Error fetching film details:', error);
//     }
//   };

//   if (!character) {
//     return <div>Loading...</div>;
//   }

//   return (
    
//     <div className='details'> 
//     <div  className='box'>
//       <Stack direction="row"   alignItems="center" spacing={4} >   
//       <Box flex="1" direction="row"  >
//         <Stack spacing={4} >
//           <Heading as="h1">{character.name}</Heading>
//           <Text>Height: {character.height}</Text>
//           <Text>Mass: {character.mass}</Text>
//           <Text>Gender: {character.gender}</Text>
//           <Text>Hair Color: {character.hair_color}</Text>
//           <Text>Skin Color: {character.skin_color}</Text>
//           <Text>Eye Color: {character.eye_color}</Text>
//           <Text>Birth Year: {character.birth_year}</Text>
//           <Heading as="h2">Movies:</Heading>
//           <Stack as="ul" spacing={2}>
//             {character.films.map((film, index) => (
//               <Text
//                 as="li"
//                 key={index}
//                 style={{ textDecoration: 'underline', cursor: 'pointer' }}
//                 onClick={() => handleFilmClick(film)}
//               >
//                 Film {index + 1}
//               </Text>
//             ))}
//           </Stack>
//           <Link to="/">
//             <Button>Back to Home</Button>
//           </Link>
//         </Stack>
//       </Box>
//       <Box flex="1">
//         {selectedFilm && <FilmDetailPage film={selectedFilm} />}
//       </Box>
//     </Stack>
//     </div>
//     </div>
//   );
// };

// export default CharacterDetailPage;





// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import './CharacterDetailPage.css';
// import { Stack, Heading, Text, Button, Box, Flex } from '@chakra-ui/react';
// import FilmDetailPage from './FilmDetailPage';

// const SWAPI_BASE_URL = 'https://swapi.dev/api';

// const CharacterDetailPage = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);
//   const [selectedFilm, setSelectedFilm] = useState(null);

//   useEffect(() => {
//     const fetchCharacterDetail = async () => {
//       try {
//         const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
//         setCharacter(response.data);
//       } catch (error) {
//         console.error('Error fetching character details:', error);
//       }
//     };
//     fetchCharacterDetail();
//   }, [id]);

//   const handleFilmClick = async (filmUrl) => {
//     try {
//       const response = await axios.get(filmUrl);
//       setSelectedFilm(response.data);
//     } catch (error) {
//       console.error('Error fetching film details:', error);
//     }
//   };

//   if (!character) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Flex direction="row" spacing={4} className="details-container">
//       <Box flex="1" className="character-details">
//         <Stack spacing={4} className="list">
//           <Heading as="h1">{character.name}</Heading>
//           <Text>Height: {character.height}</Text>
//           <Text>Mass: {character.mass}</Text>
//           <Text>Gender: {character.gender}</Text>
//           <Text>Hair Color: {character.hair_color}</Text>
//           <Text>Skin Color: {character.skin_color}</Text>
//           <Text>Eye Color: {character.eye_color}</Text>
//           <Text>Birth Year: {character.birth_year}</Text>
//           <Heading as="h2">Movies:</Heading>
//           <Link>
//           <Stack as="ul" spacing={2} className="film-list">
         
//            {character.films.map((film, index) => (
//              <Link
//                 as="li"
//                 key={index}
               
//                 onClick={() => handleFilmClick(film)}
//               >
//                 Film {index + 1}
//               </Link>
//             ))}
//           </Stack>
//           </Link>
//           <Link to="/" className="back-link">
//             <Button className="back-button">Back to Home</Button>
//           </Link>
//         </Stack>
//       </Box>
//       <Box flex="1" className="film-details">
//         {selectedFilm && <FilmDetailPage film={selectedFilm} />}
//       </Box>
//     </Flex>
//   );
// };

// export default CharacterDetailPage;



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
