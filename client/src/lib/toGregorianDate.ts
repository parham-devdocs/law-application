import { toGregorian } from "jalaali-js"


function toGregorianDate({year,month,day}:{year:number,month:number,day:number}) {
    const convertedDate=toGregorian(year,month,day)
    const date = new Date(Date.UTC(convertedDate.gy, convertedDate.gm, convertedDate.gd));
    console.log(date)
  
    return date



}

export default toGregorianDate