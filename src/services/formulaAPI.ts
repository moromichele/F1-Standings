import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const formulaApi = createApi({
    reducerPath: 'formulaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ergast.com/api/f1/' }),
    endpoints: (builder) => ({
        getDriverStandingsByYear: builder.query<any, string>({
            query: (year) => `${year}/driverStandings.json`,
            transformResponse: (response: any) => response.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        }),
        getConstructorStandingsByYear: builder.query<any, string>({
            query: (year) => `${year}/constructorStandings.json`,
            transformResponse: (response: any) => response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
        }),
    }),
})

export const { useGetDriverStandingsByYearQuery, useGetConstructorStandingsByYearQuery } = formulaApi