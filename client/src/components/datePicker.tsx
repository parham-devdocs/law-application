

import  { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import toGregorianDate from "../lib/toGregorianDate";
export default function DatePickerComponent({onChangeHandler}:{onChangeHandler:any}) {
  const [value, setValue] = useState(new Date());

  const changeDateHandler=({year,month,day}:{day:number,month:number,year:number})=>{
const convertedDate=toGregorianDate({year,month,day})
onChangeHandler(convertedDate)


}
  return <DatePicker style={{
  
    height: "36px",
    borderRadius: "8px",
    cursor:"pointer"
    
  }}  calendar={persian}  locale={persian_fa} value={value}  onChange={(e) => {
    changeDateHandler({
      day: e.day,
      month: e.month.index,
      year: e.year,
    });
  }}  />;
}