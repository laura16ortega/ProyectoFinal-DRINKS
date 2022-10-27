import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './Profile.module.css';
import Footer from '../../components/Footer/Footer';
import defaultImage from "../../assets/img/defaultImage.jpg"
import EditForm from "../../components/ProfileEdit/ProfileEdit"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions';
import { useEffect } from 'react';
import pencilEdit from "../../assets/img/pencilEdit.svg"

function Profile(props) {
    const { isAuthenticated, user } = useAuth0();
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const token = window.localStorage.getItem("jwt")
    const localUser = useSelector(state => state.localUser)
    const placeholderBackground = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80"

    useEffect(() => {
        dispatch(getUser(token))
    }, [dispatch])

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className={s.background2}>
            {/* auth0 */}
            {isAuthenticated ? (
                <>
                    <div className={s.background2}>
                        <div className={s.innerProfile}>
                            <div className={s.profileInfo}>
                                <div className={s.backgroundImage}>
                                    <img className={s.imgFit} src={placeholderBackground} alt="nada" />
                                </div>
                                <div className={s.profilePhoto}>
                                    <img className={s.imgFit} src={user.picture ? user.picture : defaultImage} alt={user?.name} />
                                </div>
                                <div className={s.profileData}>
                                    <span className={s.userEmail}>{`@${user?.nickname}`}</span>
                                    <h2 className={s.userName}>{user?.name}</h2>
                                    <p>{`Usuario desde: ${user?.updated_at.slice(0, user.updated_at.indexOf("T"))}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            ) : (<div className={token && s.hidden}><h1>Not found</h1></div>)
            }

            {/* local */}
            {Object.keys(localUser).length ?
                <div className={s.background2}>
                    <div className={s.innerProfile}>
                        <div className={s.profileInfo}>
                            <img className={s.editButton} onClick={() => handleEdit()} src={pencilEdit} alt="pencil" />
                            <div className={s.backgroundImage}>
                                <img className={s.imgFit} src={localUser.backgroundImg ? localUser.backgroundImg : placeholderBackground} alt="nada" />
                            </div>
                            <div className={s.profilePhoto}>
                                <img className={s.imgFit} src={localUser.profilePic ? localUser.profilePic : defaultImage} alt={localUser?.fullName} style={{ width: "120px", height: "120px" }} />
                            </div>
                            <div className={s.profileData}>
                                <span className={s.userEmail}>{`@${localUser?.email.slice(0, localUser.email.indexOf("@"))}`}</span>
                                <h2 className={s.userName}>{localUser?.fullName}</h2>
                                <p>{`Usuario desde: ${localUser?.createdAt.slice(0, localUser.createdAt.indexOf("T"))}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className={edit ? s.posrel : s.posabs} >
                        <EditForm token={token} />
                    </div>
                </div>
                : <h1 className={isAuthenticated && s.hidden}>Here lies a loader</h1>}
        </div>


    );
}

export default Profile;