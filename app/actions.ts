'use server'

import { cookies } from "next/headers";

export async function getAuthToken() {
    return await cookies().get('Authorization')?.value
}

export async function getUserProfile(): Promise<any> {
    let userId = await getUserId()
    let userProfile

    let json = '{"userId":"' + userId + '"}';
    await fetch('https://jb-silicon-profileprovider.azurewebsites.net/api/GetProfile?code=F1agisL-rVQd_ldnt2LDHm5xWcnhGKf2mzc9DOO-FcdzAzFucUYB-g%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: json,
    })
    .then((res) => res.json())
    .then((data) => {
        userProfile = data
    })
    .catch(error => console.error('Error:', error))

    return userProfile
}

export async function getUserId(): Promise<string> {
    let token = await getAuthToken()
    let userId: string = ''
    
    await fetch('https://jb-silicon-tokenprovider.azurewebsites.net/api/GetUserFromToken?code=8JsrEIvrhRXOPR5tGL7ZguZAl4I2RSuIOQvHNPwhe43WAzFuxlqSoA%3D%3D', {
        method: 'post',
        headers: {
            "Authorization": `bearer ${token}`
        }
    })
    .then((res) => res.json())
    .then((body) => {
        userId = body.userId
    })
    .catch(error => console.error('Error:', error))

    return userId
}