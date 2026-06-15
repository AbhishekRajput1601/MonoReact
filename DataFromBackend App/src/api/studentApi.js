import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

export const getAllStudents = () => {
    return axios.get(BASE_URL);
};

