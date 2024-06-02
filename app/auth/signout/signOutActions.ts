'use server';
import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error: string | undefined
}

export default async function signOutAction() : Promise<ActionTypes> {
  try {

    const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/SignOut?code=mCCTFmfVJ5KEe4A88o8tAPYZ19wIgjpsdM2bukLy2v_TAzFuNtyz1Q%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: '{}'
    })

    cookies().delete('Authorization')

    return {success: true, error: undefined}

  }
  catch{
    console.error("NextJS Client Error")
    return {success: false, error: 'NextJS Client Error'}
  }
}