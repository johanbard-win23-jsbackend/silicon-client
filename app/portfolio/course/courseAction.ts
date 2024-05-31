'use server'

import { cookies } from "next/headers";

export async function getCourse(id: string | undefined): Promise<any> {
    const query = '{"query": "{getCourseById (id: \\"' + id + '\\") {id title category isBestseller smallImageUri authors {name} prices{ currencySymbol price discountPrice} description hours likes likesInPercent}}" }'
    const res = await fetch('https://jb-silicon-courseprovider.azurewebsites.net/api/graphql?code=rxqSW2fwHV5NU7uRbDiF4Tl609bezu0s8_NJCjRZdLDVAzFuHqvx2A%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: query
    })

    const data = await res.json()

    return data.data.getCourseById
}

export async function getQuery(id: string | undefined): Promise<String> {
    var query = '{"query": "{getCourseById (id: \\"' + id + '\\") {id title category isBestseller smallImageUri authors {name} prices{ currencySymbol price discountPrice} description hours likes likesInPercent}}" }'

    return query
}