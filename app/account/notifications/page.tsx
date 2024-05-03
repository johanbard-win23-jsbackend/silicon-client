
import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";

export default function Notifications() {
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="account-notifications w-max">
        <div className="container">
          <AccountAside />
          <div className="notifications">
            <h1>Notifications</h1>
            <form method="post" id="notifications-form" noValidate>
                <fieldset>
                  <div className="main-box">
                  <div className="box">
                      <div id="notifications-email" className="input-box">
                          <label className="label">Preferred email for notifications</label>
                          <span></span>
                          <input type="text" placeholder="Enter your preferred email" />
                      </div>
                    </div>
                    <div className="switch-box">
                      <div className="btn-switch">
                        <label className="switch">
                            <input type="checkbox" name="" />
                            <span className="slider round green light"></span>
                        </label>
                      </div>
                      <div className="text-box">
                        <div className="form-label">Subscribe to Newsletter</div>
                        <p className="text-s">Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.</p>
                      </div>
                    </div>
                    <div className="switch-box">
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
                    </div>
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
