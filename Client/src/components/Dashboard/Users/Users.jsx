import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProfileCard from './UserCard/UserCard'
import { dashboardUsersFilter, getAllUsers } from '../../../redux/actions'
import { useEffect } from 'react'
import s from "../ReusableStyles.module.css"
import { useState } from 'react'

const Users = () => {
    const allUsers = useSelector(state => state.allUsers)
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!allUsers) {
            dispatch(getAllUsers()).then(
                (res) => typeof res === "object" && setLoaded(true))
        }
    }, [dispatch])

    const handleSelect = (e) => {
        dispatch(dashboardUsersFilter(e.target.value))
    }

    return (
        <div style={{ margin: "2rem", display: "flex", flexDirection: "column" }}>
            <div className={s.filtersContainer}>
                <select onChange={(e) => handleSelect(e)}>
                    <option value="All">Todos los usuarios</option>
                    <option value="Banned">Baneados</option>
                    <option value="Active">Activos</option>
                </select>
            </div>
            <div className={s.renderContainer}>
                {allUsers ? !loaded ? allUsers.map((e, i) =>
                    <ProfileCard
                        key={i}
                        id={e._id}
                        backgroundImage={e.backgroundImage}
                        profileImage={e.profileImage}
                        email={e.email}
                        username={e.fullName}
                        createdAt={e.createdAt}
                        banned={e.isBanned} />
                )
                    : <div className={s.loader}></div> :
                    <div className={s.noResults}><h1>SIN USUARIOS</h1></div>}
            </div>
        </div>
    )
}

export default Users