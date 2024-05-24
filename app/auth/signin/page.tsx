'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SignIn() {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
    rememberMe: true
  })
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInForm(data => ({...data, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/SignIn?code=H_40cnLKXhXGwLinKlhdxLhy3jCqgHjhRvCPv6WrZv-DAzFunVaIrA%3D%3D', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(signInForm)
      })

      let result = await res.json()

      if(res.status === 200) {
        if(result.StatusCode === 200) {
          let tokens = JSON.parse(result.Value)
          console.log(tokens.refreshToken) // THIS NEEDS TO BE STORED IN COOKIE
        }
        else if(result.StatusCode === 400) {
          setError("Bad request")
          console.warn("Bad request")
        }
        else {
          setError("Unknown Error")
          console.error("Unknown Error")
        }
      }
      else {
        setError("Server Error")
        console.error("Server Error")
      } 
    }
    catch{
      setError("Client Error")
      console.error("Client Error")
    }
  }

  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="user-login w-full d-flex center">
        <div className="container d-flex column">
          <form onSubmit={handleSubmit} id="login-form" noValidate>
            <div className="validation-message">{error}</div>
            <fieldset>
                <legend><h1>Welcome back</h1></legend>
                <p className="text-m">Don’t have an account yet? <Link href="/auth/signup">Sign up here.</Link></p>
                
                <div id="signin-email" className="input-box">
                    <label>Email</label>
                    <span></span>
                    <input type="text" name="email" value={signInForm.email} onChange={onChange} placeholder="Enter your email" />
                </div>

                <div id="signin-password" className="input-box">
                    <label>Password</label>
                    <span></span>
                    <input type="text" name="password" value={signInForm.password} onChange={onChange} placeholder="Enter your password" />
                </div>

                <div id="signin-remember" className="checkbox-box">
                    <input type="checkbox" ref={checkboxRef} />
                    <label className="text-m">Remember me</label>
                </div>

                <button type="submit" className="btn-theme">Sign in</button>
            </fieldset>
          </form>

          {/* !! Change Action  */}
          <Link href="/auth/signin">Forgot your password?</Link> 
        </div>
      </section>
    </main>
  );
}
