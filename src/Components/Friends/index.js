import React from 'react'

export default function Friends() {
    const friends = JSON.parse(localStorage.getItem("loginInfo")).friends;
    
    return (
        <div>
            {friends.map(friend => {
                return <div>{friend}</div>
            })}
        </div>
    )
}
