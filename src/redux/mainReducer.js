import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn58169274Reducer from '../features/SignIn58169274/redux/reducers'
import SignIn18166445Reducer from '../features/SignIn18166445/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn58169274: SignIn58169274Reducer,
SignIn18166445: SignIn18166445Reducer,

});