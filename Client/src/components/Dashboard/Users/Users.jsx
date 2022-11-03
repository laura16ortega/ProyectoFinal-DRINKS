import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProfileCard from './UserCard/UserCard'
import { dashboardUsersFilter, getAllUsers } from '../../../redux/actions'
import { useEffect } from 'react'
import s from "../ReusableStyles.module.css"
import { useState } from 'react'
import { useReducer } from 'react'

const Users = () => {
    const allUsers = useSelector(state => state.allUsers)
    const dispatch = useDispatch()
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch, reducerValue])

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
                {allUsers ? allUsers.map((e, i) =>
                    <ProfileCard
                        key={i}
                        id={e._id}
                        backgroundImage={e.backgroundImage}
                        profileImage={e.image}
                        email={e.email}
                        username={e.fullName}
                        createdAt={e.createdAt}
                        banned={e.isBanned} 
                        forceUpdate={forceUpdate}
                        />
                )
                    : <div className={s.loader}></div> }
            </div>
        </div>
    )
}

export default Users