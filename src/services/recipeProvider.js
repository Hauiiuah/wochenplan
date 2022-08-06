import axios from "axios";

import config from "../config";

const getAll = async () => {
    const result = await axios.get(config.BASE_API_URL+'recipes')
    return result.data
}

const recipeProvider = {getAll}
export default recipeProvider