import { combineReducers, Reducer } from 'redux';
import { UserReducer } from '../../layout/user/api/reducer/user.reducer';




export const rootReducer : Reducer<any> = combineReducers({
    user : UserReducer
});