export const testReducer = (state = {}, action) => {
  switch(action.type) {
    case "TEST_ACTION":
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}
