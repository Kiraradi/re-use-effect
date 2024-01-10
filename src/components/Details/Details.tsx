import React, { useEffect, useState } from 'react'
import { IUser } from '../../App'
import DataService from '../../services/dataServis'

import './Details.css';

export interface Details {
    userId?: number
}

export default function Details(props: Details) {
    const [user, setUser] = useState({} as IUser)

    const readDetails = async () => {
        if (props.userId) {
            const user = await DataService.readDetails(props.userId)

            if (user) {
                setUser(user);
            }    
        }
    }

    useEffect(() => {
        readDetails()
    }, [props.userId]);
    
    
    if (!props.userId) {
        return null;
    }

    return (
        <div className='Details'>
            <img src={user.avatar} alt={`photo: ${user.name}`}></img> 
            <span className='user-name'>{user.name}</span>
            <span className='user-city'>{`City: ${user.details?.city}`}</span>
            <span className='user-company'>{`Company: ${user.details?.company}`}</span>
            <span className='user-position'>{`Position: ${user.details?.position}`}</span>
        </div>
    )
}
