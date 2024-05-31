'use server'

import { cookies } from "next/headers";

export async function getCourse(id: string | undefined): Promise<any> {
    const query = '{"query": "{getCourseById (id: \\"' + id + '\\") {id title category isBestseller smallImageUri authors {name} prices{ currencySymbol price discountPrice} description hours likes likesInPercent}}" }'
    const res = await fetch('http://localhost:7020/api/graphql', {
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