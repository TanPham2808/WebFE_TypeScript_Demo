import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const menuProductApi = createApi({
    reducerPath:"menuProductApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost:7258/api/"
    }),
    tagTypes:["MenuProducts"],
    endpoints: (builder)=>({
        getMenuProducts: builder.query({
            query:()=>({
                url:"product"
            }),
            providesTags:["MenuProducts"]
        }),
        getMenuProductById: builder.query({
            query:(id)=>({
                url:`product/${id}`
            }),
            providesTags:["MenuProducts"]
        })
    }),
})

export const {useGetMenuProductsQuery, useGetMenuProductByIdQuery} = menuProductApi;
export default menuProductApi;