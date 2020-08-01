import React from "react";
import Employee from "./Emloyee";
import style from "./employees.module.css"
import {TextField} from "react-final-form-antd";
import {Form, Field} from 'react-final-form'


const Employees = ({total, per_page, removeItem, addItem, ...props}) => {

    const employeeElement = props.employees.map((u, index) => <Employee employees={u} id={u.id} removeItem={removeItem}
                                                                        key={index}/>)

    const onSubmit = async value => {
        const first_name = value.first_name
        const last_name = value.last_name
        const email = value.email
        addItem(first_name, last_name, email)
    }

    return <div>

        <div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, pristine, submitting, form}) => (
                    <form
                        onSubmit={(event) => {
                            const promise = handleSubmit(event);
                            promise && promise.then(() => {
                                form.reset();
                            })
                            return promise;
                        }}
                    >
                        <div className={style.enterDataEmployee}>
                            <div className={style.inputEmployee}>
                                <Field name="first_name" component={TextField}
                                       placeholder="enter your first name"/>
                                <Field name="last_name" component={TextField}
                                       placeholder="enter your second name"/>
                                <Field name="email" component={TextField}
                                       placeholder="enter your email"/>
                            </div>

                            <button type="submit" disabled={submitting || pristine} className={style.addEmployeeButton}>
                                Add employee
                            </button>

                        </div>

                    </form>
                )}
            />
        </div>
        <div className={style.employees}>
            {employeeElement}
        </div>
    </div>


}

export default Employees;