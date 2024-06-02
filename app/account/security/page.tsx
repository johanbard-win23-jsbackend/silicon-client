'use client'
import AccountAside from "@/app/components/asides/Account";
import styles from "./page.module.css";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { getUserId } from "@/app/actions";
import { useRouter } from "next/navigation";

export type UpdatePasswordRequest = {
  id: string,
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
}

export type DeleteUserRequest = {
  confirmDelete: boolean,
}

export default function Security() {
  const router = useRouter();
  const [error, setError] = useState('')
  const [updatePasswordData, setUpdatePasswordData] = useState({
    id: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [deleteUserData, setDeleteUserData] = useState({
    confirmDelete: false,
  })
  const passwordChangeSuccess = useRef(false)

  useEffect(() => {
    if(passwordChangeSuccess.current) {
      console.log("SUCCESS!!!")
      passwordChangeSuccess.current = false
    }
  }, [])

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUpdatePasswordData({ ...updatePasswordData, [e.target.name]: e.target.value })
  }

  const handleDeleteChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type == 'checkbox') {
      if (e.target.checked) {
        setDeleteUserData({
          ...deleteUserData, [e.target.name]: true
        })
      } else {
        setDeleteUserData({
          ...deleteUserData, [e.target.name]: false
        })
      }
    }
  }

  const handleUpdatePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
        e.preventDefault()

        let userId = await getUserId()
        //setUpdatePasswordData({ ...updatePasswordData, id: userId })
        let json = '{"id":"' + userId + '", "oldPassword":"' + updatePasswordData.oldPassword + '", "newPassword":"' + updatePasswordData.newPassword + '", "confirmPassword":"' + updatePasswordData.confirmPassword + '"}';

        //console.log(json)

        const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/UpdatePassword?code=HBqo25mv7BmKoELeTHRBOfoW-dbl7zmErln6L_QQFY_AAzFuyRfrsg%3D%3D', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: json
        })

        if(res.status === 200) {
            console.log("Success :: " + res.status + " :: " + res.statusText)
            window.location.reload();
        }
        else {
          setError("Server Error")
          console.error("Server Error :: " + res.status + " :: " + res.statusText)
        }
    }
    catch {
        setError("Client Error")
        console.error("Client Error")
    }
}

const handleDeleteUserSubmit = async (e: FormEvent<HTMLFormElement>) => {
  try {
    e.preventDefault()
    
    if(deleteUserData.confirmDelete) {
      let userId = await getUserId()
      
      let json = '{"id":"' + userId + '"}';

      console.log(json)

      const res = await fetch('https://jb-silicon-accountprovider.azurewebsites.net/api/Delete?code=fNN3los8noPe5d6yzSu5rw_3UI4esF9cqiAeD-zpi62hAzFuDhVNdg%3D%3D', {
      method: 'post',
      headers: {
          'content-type': 'application/json',
      },
      body: json
      })

      console.log(res)
      

      if(res.status == 200) {
          console.log("Success :: " + res.status + " :: " + res.statusText)
          router.push('/auth/signout')
      }
      else {
        setError("Server Error")
        console.error("Server Error :: " + res.status + " :: " + res.statusText)
    }
  }
  else {
    console.log("Unconfirmed")
  }
}
  catch {
    setError("Client Error")
    console.error("Client Error")
  }
}
  

  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="account-security w-max">
        <div className="container">
          <AccountAside />
          <div className="details">
            <h1>Security</h1>
            <form onSubmit={handleUpdatePasswordSubmit} id="password-form" noValidate>
                <fieldset>
                  <legend><h2 className="h5">Password</h2></legend>
                  <div className="box">
                      <div id="security-oldpassword" className="input-box">
                          <label className="label">Current password</label>
                          <span></span>
                          <input type="text" name="oldPassword" placeholder="Enter your current password" onChange={handlePasswordChange} />
                      </div>
                    </div>
                    <div className="box">
                      <div id="security-newpassword" className="input-box">
                          <label className="label">New password</label>
                          <span></span>
                          <input type="text" name="newPassword" placeholder="Enter your new password" onChange={handlePasswordChange}/>
                      </div>

                      <div id="security-confirmpassword" className="input-box">
                          <label className="label">Confirm new password</label>
                          <span></span>
                          <input type="text" name="confirmPassword" placeholder="Confirm your new password" onChange={handlePasswordChange}/>
                      </div>
                  </div>

                  <div className="buttons-box">
                      <button type="reset" className="btn btn-gray">Cancel</button>
                      <button type="submit" className="btn-theme">Save changes</button>
                  </div>
              </fieldset>
          </form>

          <form onSubmit={handleDeleteUserSubmit} id="delete-account-form" noValidate>
                <fieldset>
                    <legend><h2 className="h5">Delete account</h2></legend>
                    {/* <p>When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we’ll send you a link to reactivate your account.</p> */}
                    
                    <div id="delete-account-button" className="input-box">
                        <input type="checkbox" name="confirmDelete" onChange={handleDeleteChange} />
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
