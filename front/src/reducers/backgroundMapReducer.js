const backgroundReducer = (
  state = [
    [60.1673319317496, 24.80082397460938],
    [60.158966553797576, 25.063716125488285]
  ],
  action
) => {
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
