import { gql } from '@apollo/client';

// Query to fetch all songs
const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      artist
      url
      accent
      name
      top_track
      cover {
        id
      }
    }
  }
`;

export { GET_SONGS };
