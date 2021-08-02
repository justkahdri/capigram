import { gql } from "@apollo/client";

// QUERIES
export const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

// MUTATIONS
export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const REGISTER_USER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const LOGIN_USER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
