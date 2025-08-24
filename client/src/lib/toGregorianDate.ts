import { toGregorian } from "jalaali-js"


function toGregorianDate({year,month,day}:{year:number,month:number,day:number}) {
    const convertedDate=toGregorian(year,month,day) 
    
    return convertedDate



}

export default toGregorianDate