import countriesReducer from './countrySlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
