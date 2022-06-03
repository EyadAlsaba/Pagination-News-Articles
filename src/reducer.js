import { ACTIONS } from './context'
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case ACTIONS.SET_NEWS:
      return {
        ...state,
        hits: payload.hits,
        nbPages: payload.nbPages
      }
    case ACTIONS.HANDLE_SEARCH:
      return {
        ...state,
        query: payload.searchTerm,
        page: 0
      }
    case ACTIONS.REMOVE_NEWS:
      return {
        ...state,
        hits: state.hits.filter((art) => art.objectID !== payload.id)
      }
    case ACTIONS.HANDLE_PAGE:
      if (payload.typeOfAction === 'increase') {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      };
      if (payload.typeOfAction === 'decrease') {
        let prevPage = state.page - 1
        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }
        return { ...state, page: prevPage }
      }
      return {
        state
      }
    default:
      throw new Error('No matching action')
  }
}



export default reducer