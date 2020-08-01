import React from "react";
import userPhoto from "../../assets/images/user.png";
import {Button} from 'antd';
import style from "./employees.module.css"

const Employee = ({employees, id, removeItem}) => {

    const removeEmployee = () => {
        removeItem(id)
    }

    return <div className={style.item}>
        <div>
            <img className={style.avatar} src={employees.avatar != null ? employees.avatar : userPhoto} alt="user photo"/>
        </div>
        <div>

            <span>
                            <div>{employees.first_name}</div>
                            <div>{employees.last_name}</div>
                        </span>

        </div>

        <Button danger onClick={removeEmployee}>Delete</Button>

    </div>
}

export default Employee;