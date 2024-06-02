'use server'
import { getUserId } from "@/app/actions";

export type UpdatePasswordRequest = {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
  }

  export type DeleteUserRequest = {
    confirmDelete: boolean,
  }

export async function updatePassword(upReq: UpdatePasswordRequest) {
    let userId = await getUserId()
    let result

    let json = '{"id":"' + userId + '", "oldPassword":"' + upReq.oldPassword + '", "newPassword":"' + upReq.newPassword + '", "confirmPassword":"' + upReq.confirmPassword + '"}';

    await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/UpdatePassword?code=HBqo25mv7BmKoELeTHRBOfoW-dbl7zmErln6L_QQFY_AAzFuyRfrsg%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: json,
    })
    .then(async (res) => res.json())
    .then(async (data) => {
        result = data.StatusCode
    })
    .catch(error => console.error('Error:', error))

    return result
}

export async function deleteUser(duReq: DeleteUserRequest): Promise<any> {
    if(duReq.confirmDelete) {
        let userId = await getUserId()
        let result

        let json = '{"id":"' + userId + '"}';

        await fetch('http://localhost:7295/api/Delete', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json,
        })
        .then(async (res) => res.json())
        .then(async (data) => {
            result = data.StatusCode
        })
        .catch(error => console.error('Error:', error))

        return result
    }

    return "Not confirmed"
}