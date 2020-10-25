import rootReducer from './reducer/root-reducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default store;