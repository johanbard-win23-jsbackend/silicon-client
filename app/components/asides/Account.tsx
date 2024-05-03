import Link from "next/link";
import styles from "./page.module.css";

export default function AccountAside() {
  return (
    <aside className="accountaside">
        <div className="avatar-box">
            <img className="avatar-img" src="/img/avatars/kalle.png" alt="" />
            <div className="change-avatar">
                <i className="fa-solid fa-arrows-rotate"></i>
            </div>
        </div>
        <div className="short-info-box">
            {/* <p className="h5">@($"{Model.ProfileInfo!.FirstName} {Model.ProfileInfo.LastName}")</p>
            <p className="text-m">@($"{Model.ProfileInfo.Email}")</p> */}
            <p className="h5">Kalle Anka</p>
            <p className="text-m">kalle.anka@example.com</p>
        </div>
        <div className="buttons-box">
            <Link href="/account/details" className="btn btn-theme">
                <i className="fa-regular fa-cog"></i>
                <p>Account Details</p>
            </Link>
            <Link href="/account/security" className="btn btn-white">
                <i className="fa-regular fa-lock"></i>
                <p>Security</p>
            </Link>
            <Link href="/account/notifications" className="btn btn-white">
                <i className="fa-regular fa-bell"></i>
                <p>Notifications</p>
            </Link>
            <Link href="/account/messages" className="btn btn-white">
                <i className="fa-regular fa-messages"></i>
                <p>Messages</p>
            </Link>
            <Link href="/account/saveditems" className="btn btn-white">
                <i className="fa-regular fa-bookmark"></i>
                <p>Saved Items</p>
            </Link>
            <Link href="/account/details" className="btn btn-white">
                <i className="fa-regular fa-arrow-left-from-bracket"></i>
                <p>Sign Out</p>
            </Link>
        </div>
    </aside>
  );
}





