import axios from 'axios';

const readUserData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export default readUserData;


