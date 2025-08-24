import PaginationComponent from "../components/pagination";
import CardComponent from "../components/docCard";
import Header from "../components/header";
import SearchInput from "../components/searchInput";
import TabsComponent from "../components/tabs";
import { useState } from "react";
type CaseType = "حقوقی" | "کیفری";
type CaseStatus =  'در حال انجام' | 'از دست رفته' | 'موفقیت آمیز';


interface Case {
  clientFullName: string;
  issueDate: string;
  endDate: string;
  description: string;
  docId: number;
  type: CaseType;
  status: CaseStatus;
  numberOfPapers: number;
}
 const criminalCases :Case[]= [
  {
    clientFullName: "حمید رحمانی",
    issueDate: "3/12/2025",
    endDate: "7/20/2025",
    description: "اتهام به کلاهبرداری اینترنتی از طریق جعل هویت در شبکه‌های اجتماعی و کلاهبرداری از ۱۵ نفر به مبلغ ۸ میلیارد ریال.",
    docId: 2001,
    type: "کیفری",
    status: "در حال انجام",
    numberOfPapers: 60,
  },
  {
    clientFullName: "نگار سلمانی",
    issueDate: "2/18/2025",
    endDate: "5/25/2025",
    description: "قبض شده در مرز با افغانستان هنگام قاچاق مواد مخدر؛ دستگیری و انتقال به زندان مرکزی همدان.",
    docId: 2002,
    type: "کیفری",
    status: "از دست رفته",
    numberOfPapers: 85,
  },
  {
    clientFullName: "علی دادور",
    issueDate: "5/5/2025",
    endDate: "8/8/2025",
    description: "درگیری خیابانی در اصفهان که منجر به ضرب و جرح با چاقو و آسیب جدی به فرد دیگر شد.",
    docId: 2003,
    type: "کیفری",
    status: "در حال انجام",
    numberOfPapers: 45,
  },
  {
    clientFullName: "مهدیس احمدی",
    issueDate: "1/22/2025",
    endDate: "4/10/2025",
    description: "سرقت از مغازه طلافروشی در مرکز خرید ملک تهران با استفاده از وسیله نقلیه موتورسیکلت.",
    docId: 2004,
    type: "کیفری",
    status: "موفقیت آمیز",
    numberOfPapers: 38,
  },
  {
    clientFullName: "کیوان بختیاری",
    issueDate: "6/14/2025",
    endDate: "9/5/2025",
    description: "سوءاستفاده از مسند سمت به عنوان مدیر مالی شرکت دولتی و اختلاس بیش از ۵ میلیارد ریال.",
    docId: 2005,
    type: "کیفری",
    status: "از دست رفته",
    numberOfPapers: 72,
  },
  {
    clientFullName: "سارینا وفا",
    issueDate: "4/3/2025",
    endDate: "6/15/2025",
    description: "انتشار مطالب توهین‌آمیز و تبلیغ علیه نظام جمهوری اسلامی در شبکه‌های اجتماعی و توییتر.",
    docId: 2006,
    type: "کیفری",
    status: "در حال انجام",
    numberOfPapers: 55,
  },
  {
    clientFullName: "مصطفی قربانی",
    issueDate: "3/25/2025",
    endDate: "7/30/2025",
    description: "راهزنی مسلحانه در پارک جمهوری تهران با همدستی دو نفر دیگر؛ دستگیری پس از ۴۸ ساعت تعقیب.",
    docId: 2007,
    type: "کیفری",
    status: "در حال انجام",
    numberOfPapers: 67,
  },
  {
    clientFullName: "یاسمن جلالی",
    issueDate: "5/10/2025",
    endDate: "8/12/2025",
    description: "ایجاد شبکه مالی پونزی تحت عنوان 'سرمایه‌گذاری طلایی' و کلاهبرداری از بیش از ۲۰۰ نفر.",
    docId: 2008,
    type: "کیفری",
    status: "از دست رفته",
    numberOfPapers: 78,
  },
  {
    clientFullName: "فریدون مرادی",
    issueDate: "2/5/2025",
    endDate: "5/18/2025",
    description: "قتل غیرعمد در حین دفاع از حیثیت شخصی؛ بازپرسی و تبرئه به دلیل دفاع مشروع.",
    docId: 2009,
    type: "کیفری",
    status: "از دست رفته",
    numberOfPapers: 92,
  },
  {
    clientFullName: "هلیا نجاتی",
    issueDate: "4/20/2025",
    endDate: "7/25/2025",
    description: "تهیه و توزیع نرم‌افزارهای غیرمجاز و کپی‌رایت‌نشده به مدارس دولتی با عنوان آموزشی.",
    docId: 2010,
    type: "کیفری",
    status: "از دست رفته",
    numberOfPapers: 41,
  },
];
 const civilCases:Case[] = [
  {
    clientFullName: "برهام بازارگانی",
    issueDate: "2/6/2025",
    endDate: "8/9/2025",
    description: "ثبت سند ملکی برای آپارتمان در پلاک ۱۲۳، خیابان ولیعصر، تهران. حل و فصل اختلاف بین دو شریک تجاری.",
    docId: 1001,
    type: "حقوقی",
    status: "موفقیت آمیز",
    numberOfPapers: 30,
  },
  {
    clientFullName: "سارا محمدی",
    issueDate: "3/15/2025",
    endDate: "6/20/2025",
    description: "درخواست طلاق به صورت توافقی و تقسیم اموال مشترک پس از ۱۰ سال ازدواج.",
    docId: 1002,
    type: "حقوقی",
    status: "در حال انجام",
    numberOfPapers: 24,
  },
  {
    clientFullName: "رضا نوروزی",
    issueDate: "1/10/2025",
    endDate: "4/5/2025",
    description: "فروش زمین کشاورزی در شهرستان کرج، تأیید قرارداد و ثبت در دفتر اسناد.",
    docId: 1003,
    type: "حقوقی",
    status: "از دست رفته",
    numberOfPapers: 18,
  },
  {
    clientFullName: "لیلا حسینی",
    issueDate: "5/3/2025",
    endDate: "7/18/2025",
    description: "درخواست حضانت فرزند پس از طلاق و تعیین نفقه ماهانه.",
    docId: 1004,
    type: "حقوقی",
    status: "موفقیت آمیز",
    numberOfPapers: 35,
  },
  {
    clientFullName: "امیر طاهری",
    issueDate: "4/22/2025",
    endDate: "8/1/2025",
    description: "بازنشستگی از بخش دولتی و درخواست بازبینی حقوق بازنشستگی.",
    docId: 1005,
    type: "حقوقی",
    status: "در حال انجام",
    numberOfPapers: 28,
  },
  {
    clientFullName: "فاطمه اکبری",
    issueDate: "2/28/2025",
    endDate: "5/12/2025",
    description: "انحلال شرکت تعاونی روستایی و توزیع سود نهایی بین اعضا.",
    docId: 1006,
    type: "حقوقی",
    status: "از دست رفته",
    numberOfPapers: 40,
  },
  {
    clientFullName: "محمد جعفری",
    issueDate: "6/7/2025",
    endDate: "9/14/2025",
    description: "درخواست وقف کتابخانه شخصی به نام خانواده در شهر شیراز.",
    docId: 1007,
    type: "حقوقی",
    status: "در حال انجام",
    numberOfPapers: 22,
  },
  {
    clientFullName: "نگین وفایی",
    issueDate: "3/30/2025",
    endDate: "7/5/2025",
    description: "درخواست اجاره‌نامه بلندمدت برای فروشگاه در میدان انقلاب.",
    docId: 1008,
    type: "حقوقی",
    status: "از دست رفته",
    numberOfPapers: 15,
  },
  {
    clientFullName: "علیرضا کریمی",
    issueDate: "1/5/2025",
    endDate: "3/25/2025",
    description: "حل و فصل اختلاف تجاری بین دو شرکت وارداتی در بندر عباس.",
    docId: 1009,
    type: "حقوقی",
    status: "در حال انجام",
    numberOfPapers: 50,
  },
  {
    clientFullName: "زهرا شریفی",
    issueDate: "4/18/2025",
    endDate: "8/30/2025",
    description: "درخواست اصلاح اسناد ملکی به دلیل اشتباه در نام مالک پیشین.",
    docId: 1010,
    type: "حقوقی",
    status: "موفقیت آمیز",
    numberOfPapers: 33,
  },
];
type CaseType = 'civil' | 'criminal';

const docs = () => {
 const [caseType,setCaseType]=useState<"civil"| "criminal">("civil")

  return (
    <div className=" w-full h-full my-20 flex justify-center ">
<div className=" w-10/12  flex flex-col justify-center items-center gap-10">
<Header title="پرونده ها" buttonLink="/docs/create" buttonTitle="ایجاد  پرونده جدبد" />
<SearchInput/>
<TabsComponent onSelectHandler={(e:any)=>setCaseType(e)}>
<div className=" flex flex-wrap gap-15 justify-center">
{caseType==="civil" && civilCases.map((item,index)=><CardComponent key={index} clientFullName={item.clientFullName} issueDate={item.issueDate} endDate={item.endDate} description={item.description} docId={item.docId} type={item.type} status={item.status} numberOfPapers={item.numberOfPapers}/>)}
{caseType==="criminal" && criminalCases.map((item,index)=><CardComponent key={index} clientFullName={item.clientFullName} issueDate={item.issueDate} endDate={item.endDate} description={item.description} docId={item.docId} type={item.type} status={item.status} numberOfPapers={item.numberOfPapers}/>)}

</div>
</TabsComponent>

<PaginationComponent onChangeHandler={(e)=>{console.log(e)}}/>
</div>
    </div>
  )
}

export default docs