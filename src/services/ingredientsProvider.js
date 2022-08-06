import axios from "axios";
import config from "../config";


const getAll = async () => {
    const result = await axios.get(config.BASE_API_URL+'ingredients')
    return result.data
}
const ingredientsProvider = {getAll}
export default ingredientsProvider