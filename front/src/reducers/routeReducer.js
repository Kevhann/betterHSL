const routeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ROUTES":
      return action.value
    default:
      return state
  }
}
export const setRoutes = value => {
  return {
    type: "SET_ROUTES",
    value
  }
}
export default routeReducer
