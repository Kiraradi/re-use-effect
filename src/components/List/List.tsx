import React, { useState } from 'react'
import { IUser } from '../../App'
import DataServic from '../../services/dataServis';
import { useEffect } from 'react';

import './List.css';

export interface IList {
    onClick?: any
}

export default function List(props:IList) {


    const [userList, setUserList] = useState([] as IUser[])

    const readList = async () => {
        const dataList = await DataServic.readList()

        if (dataList) {
            setUserList(dataList);
        }
    }

    useEffect(() => {
        readList()
    }, []);

  return (
    <li className='list-users'>
        {
            userList.map(user => {
                return <div className='user'key={user.id} id={`${user.id}`} onClick={() => props.onClick(user.id)}>{user.name}</div>
            })
        }
    </li>
  )
}
