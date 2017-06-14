export const addMovie = (props) => {
  return {
    type: 'ADD_MOVIE',
    props
  }
}

export const updateMovie = (props) => {
  return {
    type: 'UPDATE_MOVIE',
    props
  }
}

export const deleteMovie = (id) => {
  return {
    type: 'DELETE_MOVIE',
    id
  }
}

export const toggleProperty = (id, prop) => {
  return {
    type: 'TOGGLE_PROPERTY',
    id, prop
  }
}
