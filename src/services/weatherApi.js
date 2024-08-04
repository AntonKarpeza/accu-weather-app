import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'o33r5xGpTtGj7u1djcwA2uEZPvd0REdT';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://dataservice.accuweather.com' }),
    endpoints: (builder) => ({
        getLocations: builder.query({
            query: (locationName) => ({
                url: `locations/v1/search`,
                params: {
                    apikey: API_KEY,
                    q: locationName,
                },
            }),
        }),
        getHourlyForecast: builder.query({
            query: ({ locationKey, metric }) => ({
                url: `forecasts/v1/hourly/1hour/${locationKey}`,
                params: {
                    apikey: API_KEY,
                    language: 'en-us',
                    details: false,
                    metric,
                },
            }),
        }),
        getCurrentConditions: builder.query({
            query: (locationKey) => ({
                url: `currentconditions/v1/${locationKey}`,
                params: {
                    apikey: API_KEY,
                    language: 'en-us',
                    details: false,
                },
            }),
        }),
        getDailyForecast: builder.query({
            query: ({ locationKey, metric }) => ({
                url: `forecasts/v1/daily/1day/${locationKey}`,
                params: {
                    apikey: API_KEY,
                    language: 'en-us',
                    details: false,
                    metric,
                },
            }),
        }),
    }),
});

export const { useGetLocationsQuery, useGetHourlyForecastQuery, useGetCurrentConditionsQuery, useGetDailyForecastQuery } = weatherApi;