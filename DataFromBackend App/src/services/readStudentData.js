import { getAllStudents } from "../api/studentApi";

export const readStudentData = async () => {
    try {
        const response = await getAllStudents();
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }       
}

