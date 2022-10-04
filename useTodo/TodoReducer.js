
export const TodoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add TODO':     
        
        return [
            ...initialState, action.payload
        ]
          case '[TODO] Remove TODO' :

          return initialState.filter(state => state.id !== action.payload)
        
          case '[TODO] Change Done':

          return initialState.map(state => {
            if(state.id === action.payload){
                return{
                    ...state,
                    done: !state.done
                }
            }
            return state
          })
            // break;
            // throw new Error('ABC no ha sido implementado')
    
        default:
            return initialState
    }
  
}
