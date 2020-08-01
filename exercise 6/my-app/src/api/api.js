import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://reqres.in/api/`
})


export const employeesAPI = {
    getEmployees(per_page = 12, page = 1) {
        return instance.get(`users?per_page=${per_page}&page${page}`)
            .then(response => {
                return response.data

            })
    }
}


