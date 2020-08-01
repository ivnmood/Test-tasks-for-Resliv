import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    addItem,
    removeItem,
    requestEmployees, setPage
} from "../../redux/EmployeesPageReducer";
import Employees from "./Employees";


const EmployeesContainer = (props) => {

    useEffect(() => {
        props.requestEmployees(props.per_page, props.page)
    }, []) // знаю, что это поле нельзя оставлять пустым, нооо...
    // Если я добавляю в зависимость props.page, в приложении появляется баг, который я не очень понимаю. При удалении первого работника, страница обновляется и посылается
    // get-запрос на сервер, хотя по идее номер страницы не изменяется, и пользователь появляется снова, однако при повторном удалении все работает,
    // как и должно: пользователи удалются без обновления

    return <>
        <Employees total={props.total}
                   per_page={props.per_page}
                   employees={props.employees}
                   removeItem={props.removeItem}
                   addItem={props.addItem}
        />
    </>
}


const mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees,
        per_page: state.employeesPage.per_page,
        total: state.employeesPage.total,
        page: state.employeesPage.page
    }
}


export default connect(mapStateToProps, {requestEmployees, removeItem, addItem, setPage})(EmployeesContainer)