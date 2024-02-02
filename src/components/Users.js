"use client"
import React, { useEffect, useState } from 'react';
import styles from './User.module.css';

const Users = () => {
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return(
        <>
        <h1 className={styles.header_text}>Users:{users.length}</h1>
        {users?.map(user=><div key={user.id} className="card w-[70%] mx-auto my-9 bg-grey-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>website :{user.website}</p>
            
        </div>
    </div>)}
        </>
        
        
    );
};

export default Users;