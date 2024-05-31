import Link from "next/link";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { useState } from "react";
import Image from "next/image";

// !!! CLIENT-SERVER CONFLICT
export default function Header() {
    const isSignedIn = cookies().get('Authorization')
    const profileImg = 'avatar.png' // !!! TEMP

    // const menuButtonClicked = (e: React.MouseEvent<HTMLElement>) => {

    // }

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
                {isSignedIn ?
                (<Link href="/portfolio/courses" className="menu-link">Courses</Link>)
                :
                (<></>)
                }
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
                {isSignedIn ?
                (
                    <Link href="/account/details" className="header-profile">
                        <img src={"/img/avatars/" + profileImg} alt="Profile image" />
                    </Link>
                )   
                :
                (
                    <div className="account-buttons">
                    <Link href="/auth/signin" className="btn-gray">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign in</span>
                    </Link>
                    <Link href="/auth/signup" className="btn-theme">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign up</span>
                    </Link>
                    </div>
                ) 
                }
           
        </div>

        {/* !! CLIENT SIDE COMPONENT */}
        {/* <div className="btn-mobile" onclick="MenuButton_Clicked()">
            <i className="fa-solid fa-bars"></i>
        </div> */}

        <div className="btn-mobile">
            <i className="fa-solid fa-bars"></i>
        </div>

    </div>
</header>
  );
}
