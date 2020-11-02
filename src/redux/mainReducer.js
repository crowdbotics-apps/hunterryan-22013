import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn17166446Reducer from '../features/SignIn17166446/redux/reducers'
import SignIn18166445Reducer from '../features/SignIn18166445/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn17166446: SignIn17166446Reducer,
SignIn18166445: SignIn18166445Reducer,

});