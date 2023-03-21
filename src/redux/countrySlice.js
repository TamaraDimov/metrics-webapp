import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.map((country) => ({
      continent: country.continents[0],
      name: country.name.official,
      capital: country.capital,
      population: country.population,
      currencies: country.currencies,
      flagEmoji: country.flag,
      flagSvg: country.flags.svg,
      flagAlt: country.flags.alt,
      flagPng: country.flags.png,
      timezones: country.timezones,
    }));
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountries.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default countriesSlice.reducer;
