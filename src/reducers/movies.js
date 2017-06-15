let incrementer = 0;

const movie = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return {
        id: incrementer++,
        expanded: false,
        ...action.props
      }

    case 'TOGGLE_PROPERTY':

      if(action.id !== state.id) {
        return state
      }

      state[action.prop] = !state[action.prop]

      return { ...state }

    case 'UPDATE_MOVIE':

      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        ...action.props,
        edit: false
      }

    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, movie(undefined, action)]

    case 'TOGGLE_PROPERTY':
    case 'UPDATE_MOVIE':
      return state.map(item => movie(item, action))

    case 'DELETE_MOVIE':
      return state.filter(i => i.id !== action.id)

    default:
      return state
  }
}

export default movies
