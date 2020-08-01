import {employeesAPI} from "../api/api";


const SET_EMPLOYEES = 'SET_EMPLOYEES';
const SET_EMPLOYEES_TOTAL_COUNT = 'SET_EMPLOYEES_TOTAL_COUNT';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const SET_PAGE = 'SET_PAGE';


let initialState = {
    employees: [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        }
    ],
    per_page: 12,
    total: 0,
    page: 1
};

const EmployeesReducers = (state = initialState, action) => {

    switch (action.type) {
        case SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: [...action.employees]
            }
        }
        case SET_EMPLOYEES_TOTAL_COUNT: {
            return {
                ...state,
                total: action.total
            }
        }
        case REMOVE_ITEM: {
            return {employees: [...state.employees].filter(employees => employees.id !== action.id)}
        }
        case ADD_ITEM: {
            const newItem = {
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                id: ((new Date()).getTime())
            }
            return {
                ...state,
                employees: [...state.employees, newItem],
            }
        }

        default:
            return state;
    }

};


export const setEmployees = (employees) => ({type: SET_EMPLOYEES, employees})
export const setEmployessTotalCount = (total) => ({type: SET_EMPLOYEES_TOTAL_COUNT, total})
export const removeEmployeesItem = (id) => ({type: REMOVE_ITEM, id})
export const addEmployeesItem = (first_name, last_name, email) => ({type: ADD_ITEM, first_name, last_name, email})
export const setPage = (page) => ({type: SET_PAGE, page})


export const requestEmployees = (per_page, page) => {
    return async (dispatch) => {
        let data = await employeesAPI.getEmployees(per_page, page)
        dispatch(setEmployees(data.data))
        dispatch(setEmployessTotalCount(data.total))
    }
}

export const removeItem = (id) => (dispatch) => {
    dispatch(removeEmployeesItem(id))
}

export const addItem = (first_name, last_name, email) => (dispatch) => {
    dispatch(addEmployeesItem(first_name, last_name, email))
}

export default EmployeesReducers;