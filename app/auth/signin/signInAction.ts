'use server';

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error: string | undefined
    token: string | undefined
}

export default async function signInActions(currentState: any, formData: FormData) : Promise<ActionTypes> {
    const email = formData.get('email')
    const password = formData.get('password')
    const rememberMe = formData.get('rememberMe')

    const signInFormData = {email, password, rememberMe: rememberMe ? rememberMe : false}

    try {
        const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/SignIn?code=H_40cnLKXhXGwLinKlhdxLhy3jCqgHjhRvCPv6WrZv-DAzFunVaIrA%3D%3D', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signInFormData)
        })

        let result = await res.json()

        if(res.status === 200) {
          if(result.StatusCode === 200) {
            let tokens = JSON.parse(result.Value)
            cookies().set('Authorization', tokens.refreshToken, {
                secure: true,
                httpOnly: true,
                expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
                path: "/",
                sameSite: 'strict'
            })

            return {success: true, error: undefined, token: tokens.refreshToken}
            
          }
          else if(result.StatusCode === 400) {
            console.warn("Bad request")
            return {success: false, error: undefined, token: undefined}
          }
          else {
            console.error("Unknown Error")
            return {success: false, error: 'Unknown Error', token: undefined}
          }
        }
        else {
          console.error("Azure Function Error")
          return {success: false, error: 'Azure Function Error', token: undefined}
        } 
      }
      catch{
        console.error("NextJS Client Error")
        return {success: false, error: 'NextJS Client Error', token: undefined}
      }
}