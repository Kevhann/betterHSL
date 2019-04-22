const mapClassReducer = (state = "startMap", action) => {
  switch (action.type) {
    case "SET_MAP_CLASS":
      return action.value
    default:
      return state
  }
}
export const setMapClass = value => {
  return {
    type: "SET_MAP_CLASS",
    value
  }
}
export default mapClassReducer
