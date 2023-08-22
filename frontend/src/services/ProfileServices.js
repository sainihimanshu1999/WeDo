import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'

class ProfileServices {
    getProfile(){
        const url = API_URL
        return axios.get(url).then(response=>response.data)
    }
}

export default new ProfileServices();