import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className="w-full d-flex center header">
    <div className="container w-max">
        <Link href="/" id="logo">
            <img src="" alt="Silicon Logo" />
        </Link>
        <div id="menu">
            <nav className="nav">
                <Link href="/" className="menu-link">Overview</Link>
                <Link href="/" className="menu-link">Features</Link>
                <Link href="/portfolio/courses" className="menu-link">Courses</Link>
                {/* @if(signedIn)
                {
                    <a className="menu-link" asp-action="Index" asp-controller="Course">Courses</a>
                } */}
                <Link href="/" className="menu-link">Contact</Link>
            </nav>

            {/* !! CLIENT SIDE COMPONENT */}
            <div className="btn-switch">
                <div className="">Light</div>
                <label className="switch">
                    <input type="checkbox" name="lightdarkcheckbox" />
                    <span className="slider round"></span>
                </label>
                <div className="">Dark</div>
            </div>

            <div className="account-buttons">
              <Link href="/account/details" className="btn-gray">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  <span>Sign in</span>
              </Link>
              <Link href="/account/details" className="btn-theme">
                  <i className="fa-regular fa-user"></i>
                  <span>Sign up</span>
              </Link>
                
                {/* @if (signedIn)
                {
                    <a className="header-profile" asp-action="Details" asp-controller="User">
                        <img src="~/img/uploads/profiles/@(user!.ProfileImg)" alt="@user.FirstName @user.LastName" />
                    </a>
                }
                else
                {
                    <a className="btn-gray" asp-controller="Auth" asp-action="Signin">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign in</span>
                    </a>
                    <a className="btn-theme" asp-controller="Auth" asp-action="Signup">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign up</span>
                    </a>
                } */}
            </div>
        </div>

        {/* !! CLIENT SIDE COMPONENT */}
        {/* <div className="btn-mobile" onclick="MenuButton_Clicked()">
            <i className="fa-solid fa-bars"></i>
        </div> */}
    </div>
</header>
  );
}
