import axios from "axios"

import config from "../config"

const getForWeek = async(weekString) => {
    if(!weekString) return null
    const parts = weekString.split("#")
    const result = await axios.get(config.BASE_API_URL+'menus/'+parts[0]+'/'+parts[1])
    return result.data
}

const updateMenu = async(menu,weekString) =>{
    const parts = weekString.split("#")
    const result = await axios.put(config.BASE_API_URL+'menus/'+parts[0]+'/'+parts[1],{menu})
    return result.data
}

const menuProvider = {getForWeek, updateMenu}
export default menuProvider