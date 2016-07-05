import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import SearchReducer from './reducer_search';

// console.log(VideosReducer())

const rootReducer = combineReducers({
  videos: VideosReducer,
  term: SearchReducer
});

export default rootReducer;
