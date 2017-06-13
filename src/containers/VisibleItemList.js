import { connect } from 'react-redux'
import ItemList from '../components/ItemList'
// import { toggleItem } from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onItemClick: (id) => {
    //   dispatch(toggleItem(action.id)
    // }
  }
}

const VisibleItemList =
  connect(mapStateToProps, mapDispatchToProps)
  (ItemList)

export default VisibleItemList
