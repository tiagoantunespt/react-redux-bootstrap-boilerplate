import {
  INCREMENT
} from '../../actions/types'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.value,
        isIncrementing: !state.isIncrementing
      }
    default:
      return state
  }
}
