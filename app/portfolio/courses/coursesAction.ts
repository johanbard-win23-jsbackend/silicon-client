'use server'

import { cookies } from "next/headers";

export async function getCourses(): Promise<any> {
    const query = '{ "query": "{getAllCourses {id title isBestseller smallImageUri category hours likes likesInPercent authors {name} prices {currencySymbol price discountPrice}}}" }'
    const res = await fetch('https://jb-silicon-courseprovider.azurewebsites.net/api/graphql?code=rxqSW2fwHV5NU7uRbDiF4Tl609bezu0s8_NJCjRZdLDVAzFuHqvx2A%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: query
    })

    const data = await res.json()

    return data.data.getAllCourses
}