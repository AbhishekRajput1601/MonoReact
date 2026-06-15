import { useState } from "react";
import { readStudentData } from "../services/readStudentData";

const Student = () => {
    const [students, setStudents] = useState([]);
    const [searched, setSearched] = useState(false);

    const fetchStudents = async () => {
        const data = await readStudentData();
        setStudents(Array.isArray(data) ? data : []);
        setSearched(true);
    };

    return (
        <div>
            <h1>Student List</h1>

            <button onClick={fetchStudents}> Get Students </button>

            {searched && students.length === 0 && (
                <p>There are no students.</p>
            )}

            {students.length > 0 && (
                <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: '20px', width: '50%', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.full_name}</td>
                                <td>{student.email}</td>
                                <td>{student.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Student;