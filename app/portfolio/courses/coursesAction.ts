'use server'

import { cookies } from "next/headers";

export async function getCourses(): Promise<any> {
    const query = '{ "query": "{getAllCourses {id title isBestseller smallImageUri category hours likes likesInPercent authors {name} prices {currencySymbol price discountPrice}}}" }'
    const res = await fetch('http://localhost:7020/api/graphql', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: query
    })

    const data = await res.json()

    return data.data.getAllCourses
}