import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../services/weatherApi';
import metricReducer from '../slices/unitToggleSlice';
import searchReducer from '../slices/searchSlice';

const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        metric: metricReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;