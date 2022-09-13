import moment from "moment";
import {useEffect, useState} from "react";

const WeekNavigator = ({updateWeekCallback})=>{

    moment.updateLocale('en',{week:{dow: 1,doy: 4}})
    const [currentWeek, setCurrentWeek] = useState(Number.parseInt(moment().format('W')))
    const [dateString,setDateString]=useState('')

    useEffect(() => {
        const currentMoment = moment().week(currentWeek)
        const week = currentMoment.format('WW')
        const start = currentMoment.startOf('week').format("DD.MM.YYYY")
        const end = currentMoment.endOf('week').format("DD.MM.YYYY")

        setDateString(`Kalenderwoche ${week}: (${start} - ${end})`)
        updateWeekCallback(currentMoment.format('YYYY#WW'))

    },[currentWeek,updateWeekCallback])

    const changeWeek=(amount) =>{
        setCurrentWeek(prev => prev+amount);
    }

    return (
        <div className='week'>
            <button onClick={() => changeWeek(-1)} >&lt;</button>
            {dateString}
            <button onClick={() => changeWeek(1)} >&gt;</button>
        </div>)
}


export default WeekNavigator