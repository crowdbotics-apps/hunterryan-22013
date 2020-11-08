import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn48169276Reducer from '../features/SignIn48169276/redux/reducers'
import SignIn49169275Reducer from '../features/SignIn49169275/redux/reducers'
import SignIn18166445Reducer from '../features/SignIn18166445/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn48169276: SignIn48169276Reducer,
SignIn49169275: SignIn49169275Reducer,
SignIn18166445: SignIn18166445Reducer,

});