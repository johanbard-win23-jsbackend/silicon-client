'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import { getAuthToken, getUserId, getUserProfile } from "@/app/actions"
import { useEffect, useState } from "react";
import Image from "next/image";

export type ProfileModel = {
    name: string,
    email: string,
    profileImg: string
}

// export interface ProfileProps {
//     profile: ProfileModel
// }

//export default function AccountAside(props: ProfileProps) {
export default function AccountAside() {
    //const profile = props.profile
    const pathname = usePathname()
    //const [token, setToken] = useState('')
    var token: string
    var userIdString: string
    const [profileInfo, setProfileInfo] = useState({
        userId: '',
        profileImg: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bio: '',
    })

    useEffect(() => {
        async function getData() {
            await getAuthToken()
            .then( async (t) => {
                if (t != null) {
                    //console.log(t)
                    token = t;
                }
            })

            await getUserId()
            .then(async (uid) => {
                //console.log(uid)
            })

            await getUserProfile()
            .then(async (profile) => {
                //console.log(profile)
                setProfileInfo(profile)
            })
            
        }
            // let profileRes = await getProfileInfo()
            // console.log(profileRes)
            // if (profileRes != null)
            //     setProfileInfo(profileRes)
            
        getData()
    }, [])
    

  return (
    <aside className="accountaside">
        <div className="avatar-box">
            <Image className="avatar-img" src={"/img/avatars/" + profileInfo.profileImg} fill={true} alt="" />
            <div className="change-avatar">
                <i className="fa-solid fa-arrows-rotate"></i>
            </div>
        </div>
        <div className="short-info-box">
            {/* <p className="h5">{profile.name}</p>
            <p className="text-m">{profile.email}</p> */}
            <p className="h5">{profileInfo.firstName + ' ' + profileInfo.lastName}</p>
            <p className="text-m">{profileInfo.email}</p>
        </div>
        <div className="buttons-box">
            <Link href={"/account/details"} className={`btn ${pathname === '/account/details' ? 'btn-theme' : 'btn-white'}`}>
                <i className="fa-regular fa-cog"></i>
                <p>Account Details</p>
            </Link>
            <Link href="/account/security" className={`btn ${pathname === '/account/security' ? 'btn-theme' : 'btn-white'}`}>
                <i className="fa-regular fa-lock"></i>
                <p>Security</p>
            </Link>
            <Link href="/account/notifications" className={`btn ${pathname === '/account/notifications' ? 'btn-theme' : 'btn-white'}`}>
                <i className="fa-regular fa-bell"></i>
                <p>Notifications</p>
            </Link>
            {/* <Link href="/account/messages" className={`btn ${pathname === '/account/messages' ? 'btn-theme' : 'btn-white'}`}>
                <i className="fa-regular fa-messages"></i>
                <p>Messages</p>
            </Link>
            <Link href="/account/saveditems" className={`btn ${pathname === '/account/saveditems' ? 'btn-theme' : 'btn-white'}`}>
                <i className="fa-regular fa-bookmark"></i>
                <p>Saved Items</p>
            </Link> */}
            <Link href="/auth/signout" className="btn btn-white">
                <i className="fa-regular fa-arrow-left-from-bracket"></i>
                <p>Sign Out</p>
            </Link>
        </div>
    </aside>
  );
}





