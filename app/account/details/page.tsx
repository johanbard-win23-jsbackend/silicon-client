'use client'
import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Details() {
    const token = useSearchParams().get('token')
    const [isLoading, setLoading] = useState(true)
    const [DetailsForm, setDetailsForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bio: ''
      })
   
    useEffect(() => {
        console.log("Token: " + token)
        fetch('https://jb-silicon-tokenprovider.azurewebsites.net/api/GetUserFromToken?code=8JsrEIvrhRXOPR5tGL7ZguZAl4I2RSuIOQvHNPwhe43WAzFuxlqSoA%3D%3D', {
            method: 'post',
            headers: {
                "Authorization": `bearer ${token}`,
            }
        })
        .then((res) => res.json())
        .then((body) => {
            let json = '{"userId":"' + body.userId + '"}'
            console.log(json)
            fetch('https://jb-silicon-profileprovider.azurewebsites.net/api/GetProfile?code=F1agisL-rVQd_ldnt2LDHm5xWcnhGKf2mzc9DOO-FcdzAzFucUYB-g%3D%3D', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((data) => {
            setDetailsForm(data)
            setLoading(false)
            })
        })
    }, [])
   
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
          <AccountAside />
          <div className="details">
            <h1>Account details</h1>
            <form method="post" id="basic-info" noValidate>
                <fieldset>
                  <legend><h2 className="h5">Basic info</h2></legend>
                  <div className="box">
                      <div id="details-firstname" className="input-box">
                          <label className="label">First name</label>
                          <span></span>
                          <input type="text" value={DetailsForm.firstName} placeholder="Enter your first name" />
                      </div>

                      <div id="details-lastname" className="input-box">
                          <label className="label">Last name</label>
                          <span></span>
                          <input type="text" value={DetailsForm.lastName} placeholder="Enter your last name"/>
                      </div>

                      <div id="details-email" className="input-box">
                          <label className="label">Email address</label>
                          <span></span>
                          <input type="text" value={DetailsForm.email} placeholder="Enter your email address"/>
                      </div>

                      <div id="details-phone" className="input-box">
                          <label className="label">Phone <span className="optional">(optional)</span></label>
                          <input type="text" value={DetailsForm.phone} placeholder="Enter your phone"/>
                      </div>
                  </div>

                  <div id="details-bio" className="input-box">
                      <label className="label">Bio <span className="optional">(optional)</span></label>
                      <textarea rows={4} value={DetailsForm.bio} placeholder="Add short bio"></textarea>
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