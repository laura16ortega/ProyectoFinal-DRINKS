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

function Profile(props) {
    const { isAuthenticated, user } = useAuth0();
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const token = window.localStorage.getItem("jwt")
    const localUser = useSelector(state => state.localUser)

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
                    {/*<div className={s.container}>
                        <div className={s.background}>
                            <div>
                                {user?.picture && <img className={s.img} src={user.picture} alt={user?.name} />}
                            </div>
                            <div>
                                @{user?.nickname}
                            </div>
                            <div>
                                <h2>
                                    {user?.name}
                                </h2>
                            </div>
                        </div>


                                         {user?.picture && <img className={s.img} src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}> {objKey}:{user[objKey]} </li>)}
                </ul> 
                    </div>*/}

                    <div className={s.background2}>
                        <div className={s.innerProfile}>
                            <div className={s.profileInfo}>
                                <button className={s.editButton} onClick={() => handleEdit()}>Editar perfil</button>
                                <div className={s.backgroundImage}>
                                    <img src="" alt="" />
                                </div>
                                <div className={s.profilePhoto}>
                                    <img className={s.img2} src={user.picture ? user.picture : defaultImage} alt={user?.name} />
                                </div>
                                <div className={s.profileData}>
                                    <span className={s.userEmail}>{`@${user?.nickname}`}</span>
                                    <h2 className={s.userName}>{user?.name}</h2>
                                    <p>{`Usuario desde: ${user?.updated_at.slice(0, user.updated_at.indexOf("T"))}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className={edit ? s.posrel : s.posabs} >
                            <EditForm token={token}/>
                        </div>
                    </div>
                </>

            ) : (<div style={{ display: "none" }}><h1>Not found</h1></div>)
            }

            {/* local */}
            {Object.keys(localUser).length ?
                <div className={s.background2}>
                    <div className={s.innerProfile}>
                        <div className={s.profileInfo}>
                            <button className={s.editButton} onClick={() => handleEdit()}>Editar perfil</button>
                            <div className={s.backgroundImage}>
                                <img src="" alt="" />
                            </div>
                            <div className={s.profilePhoto}>
                                <img className={s.img2} src={localUser.picture ? localUser.picture : defaultImage} alt={localUser?.fullName} />
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
                : <h1>Here lies a loader</h1>} 
        </div>


    );
}

export default Profile;