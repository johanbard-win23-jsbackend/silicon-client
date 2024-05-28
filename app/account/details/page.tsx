'use client'
import AccountAside, { ProfileModel } from "@/app/components/asides/Account";
import styles from "./page.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Details() {
    const router = useRouter()
    const [error, setError] = useState<string>('')
    const [userIdVar, setUserIdVar] = useState('')
    const token = useSearchParams().get('token')
    const [isLoading, setLoading] = useState(true)
    const [DetailsForm, setDetailsForm] = useState({
        userId: userIdVar,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bio: '',
    })
    const [AddressForm, setAddressForm] = useState({
        address1: '',
        address2: '',
        postalCode: '',
        city: ''
    })
    const [AccountAsideData, setAccountAsideData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profileImg: ''
    })

    const profile: ProfileModel = {
        name: AccountAsideData.firstName + ' ' + AccountAsideData.lastName,
        email: AccountAsideData.email,
        profileImg: AccountAsideData.profileImg
    }

    useEffect(() => {
        fetch('https://jb-silicon-tokenprovider.azurewebsites.net/api/GetUserFromToken?code=8JsrEIvrhRXOPR5tGL7ZguZAl4I2RSuIOQvHNPwhe43WAzFuxlqSoA%3D%3D', {
            method: 'post',
            headers: {
                "Authorization": `bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((body) => {
            //setUserIdVar(body.userId)
            let json = '{"userId":"' + body.userId + '"}';
            console.log(json)
            //fetch('https://jb-silicon-profileprovider.azurewebsites.net/api/GetProfile?code=F1agisL-rVQd_ldnt2LDHm5xWcnhGKf2mzc9DOO-FcdzAzFucUYB-g%3D%3D', {
            fetch('http://localhost:7225/api/GetProfile', {
                mode: 'no-cors',
                method: 'post',
                
                headers: {
                    'content-type': 'application/json'
                },
                //body: JSON.stringify(body)
                body: json
            })
            .then((res2) => {
                console.log(res2);
                let data = res2.json();
                console.log(data);
            })
            //.then((data) => {
                // setDetailsForm(data)
                // setAddressForm(data)
                // setAccountAsideData(data)
            //setLoading(false)
            //})
        })
    }, [])

    const onChangeDetails = (e: ChangeEvent<HTMLInputElement>) => {
        setDetailsForm(data => ({...data, [e.target.name]: e.target.value}))
    }

    const onChangeDetailsTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDetailsForm(data => ({...data, [e.target.name]: e.target.value}))
    }
    
    const handleDetailsSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
        e.preventDefault()

        setDetailsForm({...DetailsForm, userId: userIdVar})

        // console.log("WHAT IS THIS " + userIdVar)
        // console.log("WHAT IS THAT " + DetailsForm.userId)

        const res = await fetch('https://jb-silicon-profileprovider.azurewebsites.net/api/UpdateProfile?code=qbRvpE9Ut5dmxlae6FqXy40YKQXdl23dvhdLX3FggnJwAzFuq-PWbw%3D%3D', {
        method: 'post',
        mode: "no-cors",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(DetailsForm)
        })

        //console.log(res)

        if(res.status === 200 || res.status === 0) {
            console.log("Success")
        }
        else {
        setError("Server Error")
        console.error("Server Error")
        }
    }
    catch {
        setError("Client Error")
        console.error("Client Error")
    }
}

   
    if (isLoading) return (
        <main className={`w-full d-flex column center ${styles.main}`}>
            <section className="w-max">
                <div className="container d-flex center">
                    <p>Loading...</p>
                </div>
            </section>
        </main>)
    if (!DetailsForm) return (
        <main className={`w-full d-flex column center ${styles.main}`}>
            <section className="w-max">
                <div className="container d-flex center">
                    <p>No profile data</p>
                </div>
            </section>
        </main>)
  
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="account-details w-max">
        <div className="container">
          <AccountAside profile={profile} />
          <div className="details">
            <h1>Account details</h1>
            <form onSubmit={handleDetailsSubmit} id="basic-info" noValidate>
                <fieldset>
                  <legend><h2 className="h5">Basic info</h2></legend>
                  <div className="box">
                      <div id="details-firstname" className="input-box">
                          <label className="label">First name</label>
                          <span></span>
                          <input type="text" name='firstName' value={DetailsForm.firstName} onChange={onChangeDetails} placeholder="Enter your first name" />
                      </div>

                      <div id="details-lastname" className="input-box">
                          <label className="label">Last name</label>
                          <span></span>
                          <input type="text" name='lastName' value={DetailsForm.lastName} onChange={onChangeDetails} placeholder="Enter your last name"/>
                      </div>

                      <div id="details-email" className="input-box">
                          <label className="label">Email address</label>
                          <span></span>
                          <input type="text" name='email' value={DetailsForm.email} placeholder="Enter your email address" disabled/>
                      </div>

                      <div id="details-phone" className="input-box">
                          <label className="label">Phone <span className="optional">(optional)</span></label>
                          <input type="text" name='phone' value={DetailsForm.phone} onChange={onChangeDetails} placeholder="Enter your phone"/>
                      </div>
                  </div>

                  <div id="details-bio" className="input-box">
                      <label className="label">Bio <span className="optional">(optional)</span></label>
                      <textarea rows={4} name='bio' value={DetailsForm.bio} onChange={onChangeDetailsTextArea} placeholder="Add short bio"></textarea>
                  </div>

                  <div className="buttons-box">
                      <button type="reset" className="btn btn-gray">Cancel</button>
                      <button type="submit" className="btn-theme">Save changes</button>
                  </div>
              </fieldset>
          </form>

          <form method="post" id="address" noValidate>
                <fieldset>
                    <legend><h2 className="h5">Address</h2></legend>
                    
                    <div id="details-address1" className="input-box">
                        <label className="label">Address line 1</label>
                        <input type="text" />
                    </div>

                    <div id="details-address2" className="input-box">
                        <label className="label">Address line 2</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <div id="details-postalcode" className="input-box">
                            <label className="label">Postal code</label>
                            <input type="text" />
                        </div>

                        <div id="city" className="input-box">
                            <label className="label">City</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="buttons-box">
                        <button type="reset" className="btn btn-gray">Cancel</button>
                        <button type="submit" className="btn-theme">Save changes</button>
                    </div>
                </fieldset>
            </form>

          </div>
        </div>
      </section>
        
    </main>
  );
}