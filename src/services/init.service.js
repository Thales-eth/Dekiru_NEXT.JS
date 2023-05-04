import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${path}`
        })
    }
}

export default InitAxios