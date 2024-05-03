
import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";

export default function Details() {
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
                          <input type="text" placeholder="Enter your first name" />
                      </div>

                      <div id="details-lastname" className="input-box">
                          <label className="label">Last name</label>
                          <span></span>
                          <input type="text" placeholder="Enter your last name"/>
                      </div>

                      <div id="details-email" className="input-box">
                          <label className="label">Email address</label>
                          <span></span>
                          <input type="text" placeholder="Enter your email address"/>
                      </div>

                      <div id="details-phone" className="input-box">
                          <label className="label">Phone <span className="optional">(optional)</span></label>
                          <input type="text" placeholder="Enter your phone"/>
                      </div>
                  </div>

                  <div id="details-bio" className="input-box">
                      <label className="label">Bio <span className="optional">(optional)</span></label>
                      <textarea rows={4} placeholder="Add short bio"></textarea>
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