import { connect } from 'react-redux'
import ItemList from '../components/ItemList'
import { toggleProperty } from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleProp: (id, prop) => {
      dispatch(toggleProperty(id, prop))
    }
  }
}

const VisibleItemList =
  connect(mapStateToProps, mapDispatchToProps)
  (ItemList)

export default VisibleItemList
