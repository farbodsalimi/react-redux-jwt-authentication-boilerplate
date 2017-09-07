import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as featureReducer } from './feature';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    features: featureReducer
});

export default rootReducer;
