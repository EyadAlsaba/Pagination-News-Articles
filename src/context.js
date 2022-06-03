import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

export const ACTIONS = {
  SET_LOADING: 'LOADING',
  SET_NEWS: 'NEWS',
  REMOVE_NEWS: 'REMOVE',
  HANDLE_PAGE: 'PAGE NUMBER',
  HANDLE_SEARCH: 'SEARCH QUERY'
};

const API = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData(url) {
    dispatch({ type: ACTIONS.SET_LOADING });

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_NEWS, payload: { hits: data.hits, nbPages: data.nbPages } })
    } catch (error) {
      console.log(error)
    }
  }

  function removeArticle(id) {
    dispatch({ type: ACTIONS.REMOVE_NEWS, payload: { id } })
  }

  function handleSearchQuery(searchTerm) {
    dispatch({ type: ACTIONS.HANDLE_SEARCH, payload: { searchTerm } })
  }

  function handlePage(typeOfAction) {
    dispatch({ type: ACTIONS.HANDLE_PAGE, payload: { typeOfAction } })
  }

  useEffect(() => {
    fetchData(`${API}query=${state.query}&page=${state.page}`)
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removeArticle, handleSearchQuery, handlePage }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }