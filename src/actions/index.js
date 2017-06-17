export const addMovie = (props) => {
  return {
    type: 'ADD_MOVIE',
    props
  }
}

export const updateMovie = (id, props) => {
  return {
    type: 'UPDATE_MOVIE',
    id,
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
