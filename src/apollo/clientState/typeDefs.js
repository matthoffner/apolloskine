import gql from 'graphql-tag';

export default gql`
    extend type Query {
        notes: [Note]!
        note(id: String!): Note
    }

    extend type Mutation {
        createNote(title: String!, content: String): Note!
        editNote(id: String!, title: String!, content: String): Note
        removeNote(id: String!): Boolean
    }

    type Note {
        id: String!
        title: String!
        content: String!
    }
`;
