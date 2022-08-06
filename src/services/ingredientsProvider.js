import axios from "axios";


const BASE_API_URL = process.env.API_URL || 'http://localhost:1337/api/'


const getAll = async () => {
    const result = await axios.get(BASE_API_URL+'ingredients')
    return result.data
}
const ingredientsProvider = {getAll}
export default ingredientsProvider