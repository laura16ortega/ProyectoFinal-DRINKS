import React from 'react'
import { useDispatch } from 'react-redux'
import s from "./UserCard.module.css"
import defaultImage from "../../../../assets/img/defaultImage.jpg"
import deleteCross from "../../../../assets/img/redCross.png"
import { deleteUser } from '../../../../redux/actions'
import { token } from '../../../../assets/helpers'

const UserCard = ({ id, backgroundImage, profileImage, email, username, createdAt, banned }) => {
    const dispatch = useDispatch()
    const placeholderBackground = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80"

    const handleDelete = (id) => {
        dispatch(deleteUser(token, id))
    }

    const handleBan = (id) => {
        /*dispatch(banUser(id))*/
    }

    return (
        <div className={s.background2}>
            <div className={s.innerProfile}>
                <div className={s.banButton}>
                    <button style={{width: "100%", display: "block", alignItems: "center", fontWeight: "bold"}} onClick={() => handleBan(id)} className={`${banned ? s.unBan : s.ban}`}>
                        <div style={{display: "flex"}}>
                            {banned ? (
                                <div style={{padding: "0 10px", paddingTop: "1px"}}>UNBAN</div>
                            ) : (
                                <div style={{padding: "0 10px", paddingTop: "1px"}}>BAN</div>
                            )}
                        </div>
                    </button>
                </div>
                {banned ? <img className={s.deleteButton} src={deleteCross} alt="x" onClick={() => handleDelete(id)} /> : ""/*<button className={s.banButton}>Unban</button>*/}
                <div className={s.profileInfo}>
                    <div className={s.backgroundImage}>
                        <img className={s.imgFit} src={backgroundImage ? backgroundImage : placeholderBackground} alt="nada" />
                    </div>
                    <div className={s.profilePhoto}>
                        <img className={s.imgFit} src={profileImage ? profileImage : defaultImage} alt="" />
                    </div>
                    <div className={s.profileData}>
                        <span className={s.userEmail}>{`@${email.slice(0, email.indexOf("@"))}`}</span>
                        <h2 className={s.userName}>{username}</h2>
                        <p>{`Usuario desde: ${createdAt.slice(0, createdAt.indexOf("T"))}`}</p>
                        <div className={s.statusContainer}>
                            <div>{`Estado: `}</div>
                            {banned ? <h1 style={{ backgroundColor: "#B73E3E" }}>Baneado</h1> : <h1 style={{ backgroundColor: "#5BB318" }}>Activo</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard