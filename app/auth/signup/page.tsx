import Link from "next/link";
import styles from "./page.module.css";

export default function SignUp() {
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="create-account-form w-full d-flex center">
        <div className="container d-flex column">
          <form method="post" id="create-account-form" noValidate>
            <div className="validation-message"></div>
            <fieldset>
                <legend><h1>Create account</h1></legend>
                <p className="text-m">Already have an account? <Link href="/auth/signin">Sign in here</Link>.</p>
                <div className="box">
                    <div id="signup-firstname" className="input-box">
                        <label>First name</label>
                        <span></span>
                        <input type="text" placeholder="Enter your first name" />
                    </div>

                    <div id="signup-lastname" className="input-box">
                        <label>Last name</label>
                        <span></span>
                        <input type="text" placeholder="Enter your last name" />
                    </div>
                </div>

                <div id="signup-email" className="input-box">
                    <label>Email</label>
                    <span></span>
                    <input type="text" placeholder="Enter your email" />
                </div>

                <div id="signup-password" className="input-box">
                    <label>Password</label>
                    <span></span>
                    <input type="text" placeholder="Enter your password" />
                </div>

                <div id="signup-confirmpassword" className="input-box">
                    <label>Confirm password</label>
                    <span></span>
                    <input type="text" placeholder="Enter your password again" />
                </div>

                <div id="signup-terms" className="checkbox-box">
                    <input type="checkbox" />
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
