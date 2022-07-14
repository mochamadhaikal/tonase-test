import {
    createContext,
    useReducer,
    Dispatch,
    ReactNode,
  } from 'react'
  
  interface State {
    keyword: string
  }
  
  type Action =
    | { type: 'SET_KEYWORD'; payload: string }
  
  
  const initialState: State = {
    keyword: ''
  }
  
  const BlogStore = createContext<{
    blogState: State
    blogDispatch: Dispatch<Action>
  }>({
    blogState: initialState,
    blogDispatch: () => null
  })
  
  const { Provider } = BlogStore
  
  interface BlogProviderProps {
    children: ReactNode
  }
  
  function BlogProvider({ children }: BlogProviderProps){
    const [blogState, blogDispatch] = useReducer(
      (currentState: State, action: Action) => {
        switch (action.type) {
          case 'SET_KEYWORD':
            return {
              keyword: action.payload
            }
          default:
            throw new Error()
        }
      },
      initialState
    )
  
    return (
      <Provider value={{ blogState, blogDispatch }}>
        {children}
      </Provider>
    )
  }
  
  export { BlogStore, BlogProvider }
  