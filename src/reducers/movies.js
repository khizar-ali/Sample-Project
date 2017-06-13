let incrementer = 0;

const movie = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return {
        id: incrementer++,
        title: action.title,
        genre: action.genre
      }

    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, movie(undefined, action)]

    case 'DELETE_MOVIE':

      const idx = state.indexOf(state.filter(i => i.id === action.id));

      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]

    default:
      return state
  }
}

export default movies
