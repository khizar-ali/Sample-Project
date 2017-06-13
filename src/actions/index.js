export const addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

export const deleteMovie = (id) => {
  return {
    type: 'DELETE_MOVIE',
    id
  }
}
