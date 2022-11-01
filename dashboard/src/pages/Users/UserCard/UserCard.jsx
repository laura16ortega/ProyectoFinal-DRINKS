import React from 'react'
import s from "./UserCard.module.css"
import defaultImage from "../../../../assets/img/defaultImage.jpg"

const UserCard = ({ backgroundImage, profileImage, email, username, createdAt, banned }) => {
    const placeholderBackground = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80"

    return (
    <div className={s.background2}>
            <div className={s.innerProfile}>
            {!banned ? <button className={s.banButton}>Ban</button> : <button className={s.banButton}>Unban</button>}
                <div className={s.profileInfo}>
                
                    <div className={s.backgroundImage}>
                        <img className={s.imgFit} src={backgroundImage ? backgroundImage : placeholderBackground} alt="nada" />
                    </div>
                    <div className={s.profilePhoto}>
                        <img className={s.imgFit} src={profileImage ? profileImage : defaultImage} alt=""/>
                    </div>
                    <div className={s.profileData}>
                        <span className={s.userEmail}>{`@${email.slice(0, email.indexOf("@"))}`}</span>
                        <h2 className={s.userName}>{username}</h2>
                        <p>{`Usuario desde: ${createdAt.slice(0, createdAt.indexOf("T"))}`}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserCard