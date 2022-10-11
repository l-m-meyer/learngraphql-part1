const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Queyr to get tracks array for the homepage grid"
    tracksForHome:[Track!]
  }
  
  "A track is group of Mdoules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title:String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;