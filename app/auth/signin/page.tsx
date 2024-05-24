'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import signInActions from "./signInAction";

export default function SignIn() {
  const [signInForm, setSignInForm] = useFormState(signInActions, {success: false, error: undefined, token: undefined })
  const router = useRouter()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if(signInForm.success) {
      router.push('/account/details?token=' + signInForm.token)
    }
    else {
      setError(signInForm.error)
    }
  }, [signInForm])

  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="user-login w-full d-flex center">
        <div className="container d-flex column">
          <form action={setSignInForm} id="login-form" noValidate>
            <div className="validation-message">{error}</div>
            <fieldset>
                <legend><h1>Welcome back</h1></legend>
                <p className="text-m">Don’t have an account yet? <Link href="/auth/signup">Sign up here.</Link></p>
                
                <div id="signin-email" className="input-box">
                    <label>Email</label>
                    <span></span>
                    <input type="text" name="email" placeholder="Enter your email" />
                </div>

                <div id="signin-password" className="input-box">
                    <label>Password</label>
                    <span></span>
                    <input type="text" name="password" placeholder="Enter your password" />
                </div>

                <div id="signin-remember" className="checkbox-box">
                    <input type="checkbox" />
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
