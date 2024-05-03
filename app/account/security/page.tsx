import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";

export default function Security() {
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="account-security w-max">
        <div className="container">
          <AccountAside />
          <div className="details">
            <h1>Security</h1>
            <form method="post" id="password-form" noValidate>
                <fieldset>
                  <legend><h2 className="h5">Password</h2></legend>
                  <div className="box">
                      <div id="details-firstname" className="input-box">
                          <label className="label">Current password</label>
                          <span></span>
                          <input type="text" placeholder="Enter your first name" />
                      </div>
                    </div>
                    <div className="box">
                      <div id="details-lastname" className="input-box">
                          <label className="label">New password</label>
                          <span></span>
                          <input type="text" placeholder="Enter your last name"/>
                      </div>

                      <div id="details-email" className="input-box">
                          <label className="label">Confirm new password</label>
                          <span></span>
                          <input type="text" placeholder="Enter your email address"/>
                      </div>
                  </div>

                  <div className="buttons-box">
                      <button type="reset" className="btn btn-gray">Cancel</button>
                      <button type="submit" className="btn-theme">Save changes</button>
                  </div>
              </fieldset>
          </form>

          <form method="post" id="delete-account-form" noValidate>
                <fieldset>
                    <legend><h2 className="h5">Delete account</h2></legend>
                    <p>When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we’ll send you a link to reactivate your account.</p>
                    
                    <div id="delete-account-button" className="input-box">
                        <input type="checkbox" />
                        <label>Yes, I want to delete my account.</label>
                    </div>

                    <div className="buttons-box">
                        <button type="submit" className="btn-red">Delete</button>
                    </div>
                </fieldset>
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}
