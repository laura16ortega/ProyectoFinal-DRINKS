import React from 'react'
import { useSelector } from "react-redux"
import ProfileCard from './UserCard/UserCard'

const Users = () => {
  const usersplaceholder = [
    {
        backgroundImage: "https://img.itch.zone/aW1nLzEwMDg0NTk5LnBuZw==/315x250%23c/SAxj8t.png",
        profileImage: "https://img.itch.zone/aW1hZ2UvOTYzMzY4LzU1MDE0NDUuanBn/347x500/LhWq8l.jpg",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "asdasdasd",
        createdAt: "asdadsafdTT65FGDFG",
        banned: true
    },
    {
        backgroundImage: "https://img.itch.zone/aW1nLzEwMDg0NTk5LnBuZw==/315x250%23c/SAxj8t.png",
        profileImage: "https://img.itch.zone/aW1nLzgyNzQzNjEucG5n/315x250%23c/MvTIEA.png",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "dasdadasdas",
        createdAt: "asdadsafdTT65FGDFG",
        banned: false
    },
    {
        backgroundImage: "https://img.itch.zone/aW1nLzE5Njc3MDcucG5n/315x250%23c/bwGgYQ.png",
        profileImage: "https://img.itch.zone/aW1hZ2UvOTYzMzY4LzU1MDE0NDUuanBn/347x500/LhWq8l.jpg",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "asdasdasd",
        createdAt: "asdadsafdTT65FGDFG",
        banned: false
    },
    {
        backgroundImage: "https://img.itch.zone/aW1nLzEwMDg0NTk5LnBuZw==/315x250%23c/SAxj8t.png",
        profileImage: "https://img.itch.zone/aW1hZ2UvOTYzMzY4LzU1MDE0NDUuanBn/347x500/LhWq8l.jpg",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "asdasdasdas",
        createdAt: "asdadsafdTT65FGDFG",
        banned: false
    },
    {
        backgroundImage: "https://img.itch.zone/aW1hZ2UvOTYzMzY4LzU1MDE0NDUuanBn/347x500/LhWq8l.jpg",
        profileImage: "https://img.itch.zone/aW1nLzEwMDg0NTk5LnBuZw==/315x250%23c/SAxj8t.png",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "asdasdasdasdas",
        createdAt: "asdadsafdTT65FGDFG",
        banned: true
    },
    {
        backgroundImage: "https://img.itch.zone/aW1nLzEwMDg0NTk5LnBuZw==/315x250%23c/SAxj8t.png",
        profileImage: "https://img.itch.zone/aW1hZ2UvOTYzMzY4LzU1MDE0NDUuanBn/347x500/LhWq8l.jpg",
        email: "asddfsfsdfs@fdsjfsd.com",
        username: "asdaddffd",
        createdAt: "asdadsafdTT65FGDFG",
        banned: false
    },
]

    return (
      <div style={{margin: "2rem"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {usersplaceholder.length ? usersplaceholder.map((e, i) =>
                    <ProfileCard
                        key={i}
                        backgroundImage={e.backgroundImage}
                        profileImage={e.profileImage}
                        email={e.email}
                        username={e.username}
                        createdAt={e.createdAt}
                        banned={e.banned} />
                ) : <h1>No users</h1>}
            </div>
        </div>
    )
  }
  
  export default Users