import { configureStore } from '@reduxjs/toolkit'
import basicInfoSlice  from '../features/basicInfo/basicInfoSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { experienceInfoSlice } from '../features/experienceInfo/experienceInfoSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  basicInfo:basicInfoSlice,
  experienceInfo:experienceInfoSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})

const persistor = persistStore(store);
export { persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch