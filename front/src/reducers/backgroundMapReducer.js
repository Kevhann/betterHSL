const backgroundReducer = (state = [60.192059, 24.945831], action) => {
  switch (action.type) {
    case "SET_BACKGROUND_MAP_LOCATION":
      return action.value
    default:
      return state
  }
}
export const setBackgroundLocation = value => {
  return {
    type: "SET_BACKGROUND_MAP_LOCATION",
    value
  }
}
export default backgroundReducer
