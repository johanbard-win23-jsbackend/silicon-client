'use client'

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SignUp() {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: true
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm(data => ({...data, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/SignUp?code=5iOaLhrt8c4wMg3b9ghJOsNfdnBqkIzXeQLscAb1yQhOAzFuE8Cn4Q%3D%3D', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(signUpForm)
      })
      
      let result = await res.json()

      if(res.status == 200) {
        if(result.StatusCode === 200)
          router.push("/auth/signin")
        else if(result.StatusCode === 409) {
          setError("User with email address already exists")
          console.warn("User with email address already exists")
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
    catch {
      setError("Client Error")
        console.error("Client Error")
    }
    
    
    // console.log(await res.json())

    // if(res.status == 200) {
    //   //router.push("/auth/signin")
    // }
    // else {
    //   let result = await res.json()
    //   setError(result.error)
    //   console.warn(result.error)
    // }
  }

  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="create-account-form w-full d-flex center">
        <div className="container d-flex column">
          <form onSubmit={handleSubmit} id="create-account-form" noValidate>
            {error && <div className="validation-message">{error}</div> }
            <fieldset>
                <legend><h1>Create account</h1></legend>
                <p className="text-m">Already have an account? <Link href="/auth/signin">Sign in here</Link>.</p>
                <div className="box">
                    <div id="signup-firstname" className="input-box">
                        <label>First name</label>
                        <span></span>
                        <input type="text" name="firstName" value={signUpForm.firstName} onChange={onChange} placeholder="Enter your first name" />
                    </div>

                    <div id="signup-lastname" className="input-box">
                        <label>Last name</label>
                        <span></span>
                        <input type="text" name="lastName" value={signUpForm.lastName} onChange={onChange} placeholder="Enter your last name" />
                    </div>
                </div>

                <div id="signup-email" className="input-box">
                    <label>Email</label>
                    <span></span>
                    <input type="text" name="email" value={signUpForm.email} onChange={onChange} placeholder="Enter your email" />
                </div>

                <div id="signup-password" className="input-box">
                    <label>Password</label>
                    <span></span>
                    <input type="password" name="password" value={signUpForm.password} onChange={onChange} placeholder="Enter your password" />
                </div>

                <div id="signup-confirmpassword" className="input-box">
                    <label>Confirm password</label>
                    <span></span>
                    <input type="password" name="confirmPassword" value={signUpForm.confirmPassword} onChange={onChange} placeholder="Enter your password again" />
                </div>

                <div id="signup-terms" className="checkbox-box">
                    <input type="checkbox" ref={checkboxRef} />
                    <label className="text-m">I agree to the <Link href="/auth/signup">Terms</Link> & <Link href="/auth/signup">Conditions.</Link></label>
                    <span></span>
                </div>
                <button type="submit" className="btn-theme">Sign up</button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}
