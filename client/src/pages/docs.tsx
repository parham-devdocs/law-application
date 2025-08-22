import PaginationComponent from "../components/pagination";
import CardComponent from "../components/docCard";
import Header from "../components/header";
const docs = () => {
  
  return (
    <div className=" w-full h-full my-20 flex justify-center ">
<div className=" w-10/12  flex flex-col justify-center items-center gap-10">
<Header title="پرونده ها" buttonLink="/docs/create" buttonTitle="ایجاد  پرونده جدبد" />
<div className=" flex flex-wrap gap-15 justify-center">
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
<CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>

  <CardComponent clientFullName="برهام بازارگادی" issueDate="2/6/2025" endDate="8/9/2025" description="اlkwjefnkjewfnkjewbfkjebfjkebfhhebrvjkghbeakbnkvjenbkj" docId={10} type="حقوقی" status="موفقیت آمیز" numberOfPapers={30}/>
</div>
<PaginationComponent onChangeHandler={(e)=>{console.log(e)}}/>
</div>
    </div>
  )
}

export default docs