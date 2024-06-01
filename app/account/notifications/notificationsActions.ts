'use server'

import { getUserId } from "@/app/actions";

export async function getUserSubscription(): Promise<any> {
    let userId = await getUserId()
    let subscriberId

    let json = '{"id":"' + userId + '"}';

    await fetch('https://jb-silicon-profileprovider.azurewebsites.net/api/GetUserSubscriberId?code=A63BOej-CFmRvM8ycODJ-YUPt4Kmfa11Z1WkM-vyRZE1AzFubnUJpg%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: json,
    })
    .then((res) => res.json())
    .then((data) => {
        subscriberId = data.id
    })
    .catch(error => console.error('Error:', error))

    let notData
    json = '{"id":' + subscriberId + '}';

    await fetch('https://jb-silicon-subscriberprovider.azurewebsites.net/api/GetSubscriber?code=4_-Ydj6fJPuOGVMAlQr2FG2EoqQ_oClo2gcvjSN7UnlIAzFu8sDSpQ%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: json,
    })
    .then((res) => res.json())
    .then((data) => {
        notData = data
    })
    .catch(error => console.error('Error:', error))

    return notData
}