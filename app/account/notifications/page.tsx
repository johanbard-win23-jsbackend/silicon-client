'use client'
import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getUserSubscription } from "./notificationsActions";

export type SubscriberModel = {
  id: number,
  email: string,
  isActive: boolean
}

export default function Notifications() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [notificationInfo, setNotificationInfo] = useState({
    id: 0,
    email: '',
    isActive: true,
  })

  useEffect(() => {
    async function getData() {
      await getUserSubscription()
      .then( async (s) => {
        if (s != null) {
          setNotificationInfo(s)
          setIsLoading(false)
        }
      }) 
    }

    getData()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type == 'checkbox') {
      if (e.target.checked) {
        setNotificationInfo({
          ...notificationInfo, [e.target.name]: true
        })
      } else {
        setNotificationInfo({
          ...notificationInfo, [e.target.name]: false
        })
      }
    } else {
      setNotificationInfo({ ...notificationInfo, [e.target.name]: e.target.value })
    }
  }

  const handleNotificationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
        e.preventDefault()

        console.log(notificationInfo)

        const res = await fetch('https://jb-silicon-subscriberprovider.azurewebsites.net/api/UpdateSubscriber?code=swb24lddQ0WaIa_tuy_3vt3n4diYG8HFZHJrFuHvW1bNAzFuxB1e-Q%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(notificationInfo)
        })

        if(res.status === 200) {
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
if (!notificationInfo) return (
  <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="w-max">
          <div className="container d-flex center">
              <p>No profile data</p>
          </div>
      </section>
  </main>)

  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="account-notifications w-max">
        <div className="container">
          <AccountAside />
          <div className="notifications">
            <h1>Notifications</h1>
            <form onSubmit={handleNotificationSubmit} id="notifications-form" noValidate>
                <fieldset>
                  <div className="main-box">
                  <div className="box">
                      <div id="notifications-email" className="input-box">
                          <label className="label">Preferred email for notifications</label>
                          <span></span>
                          <input type="text" name="email" value={notificationInfo.email} placeholder="Enter your preferred email" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="switch-box">
                      <div className="btn-switch">
                        <label className="switch">
                            <input type="checkbox" name="isActive" defaultChecked={notificationInfo.isActive} onChange={handleChange} />
                            <span className="slider round green light"></span>
                        </label>
                      </div>
                      <div className="text-box">
                        <div className="form-label">Subscribe to Newsletter</div>
                        <p className="text-s">Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.</p>
                      </div>
                    </div>
                    {/* <div className="switch-box">
                      <div className="btn-switch">
                        <label className="switch">
                            <input type="checkbox" name="" />
                            <span className="slider round green light"></span>
                        </label>                        
                      </div>
                      <div className="text-box">
                        <div className="form-label">Use Dark Mode Theme in Application</div>
                        <p className="text-s">Tortor massa porttitor enim tristique neque fermentum sed.</p>
                      </div>
                    </div> */}
                    </div>

                    <div className="buttons-box">
                      <button type="reset" className="btn-gray">Cancel</button>
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
