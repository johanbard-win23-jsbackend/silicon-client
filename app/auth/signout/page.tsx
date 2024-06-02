'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import signOutAction from "./signOutActions";
import styles from "./page.module.css";

type MessageType = string | undefined

export default function SignOut() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  
  useEffect(() => {
    async function doIt() {
      let res = await signOutAction()
      setIsLoading(false)

      if (!res.success) {
        let message = res.error
        if (message !== undefined) {setMessage(message)}
        else setMessage('UNKNOWN ERROR')
      }
      else {
        setIsSuccess(true)  
        router.push('/')
        router.refresh()
      }
    }

    doIt()
  }, [])

  if (isLoading) return (
    <main className={`w-full d-flex column center ${styles.main}`}>
        <section className="w-max">
            <div className="container d-flex center">
                <p>Trying to sign out...</p>
            </div>
        </section>
    </main>)
    
if (!isSuccess) return (
    <main className={`w-full d-flex column center ${styles.main}`}>
        <section className="w-max">
            <div className="container d-flex center">
                <p>{message}</p>
            </div>
        </section>
    </main>)

return (
  <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="w-max">
          <div className="container d-flex center">
              <p>Now signing out...</p>
          </div>
      </section>
  </main>)
}
