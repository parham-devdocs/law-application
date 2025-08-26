import { HStack, Stack, Text, useMediaQuery, VStack } from "rsuite";
import Person from "../../assets/unknownPerson.jpeg";
import { useParams } from 'react-router-dom';
import { GoLaw } from "react-icons/go";
import { FaPhoneFlip } from "react-icons/fa6";
import {
  FaUser,
  FaIdCard,
  FaFileAlt,
  FaUserTie,
  FaBalanceScale,
} from "react-icons/fa";
import ImageUploader from "../imageUploader";

type ClientPersonalInfoProps = {
  clientFullName: string;
  nationalId: string;
  plaintiff: string[];
  defendant: string[];
  picture?:string
  caseType: "حقوقی" | "کیفری";
  proceedingNumber: string;
  phoneNumber:string,
  courtName:string
};
const caseInfo:ClientPersonalInfoProps={
caseType:"حقوقی",
clientFullName:"علی علیزاده",
nationalId:"0021808821",
plaintiff:["lkamwd","ljkqwnhdljwhqd"],
proceedingNumber:"125646584849848585",
defendant:["lkamwd","ljkqwnhdljwhqd"],
phoneNumber:"+989124687022",
courtName:""}
const CaseInfo = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const {id:caseId}=useParams<{id:string}>()

  return (
    <VStack
      alignItems="center" 
      justifyContent="center"
      spacing={20}
      className=" shadow-md p-5"
    >
        <div className="mt-4 md:mt-0 relative">
          <Badge color="blue" className=" relative top-5 -right-4">{caseId}</Badge>
        <img
          src={caseInfo.picture ? caseInfo.picture :Person}
          alt="مشاور حقوقی"
          className="rounded-full border-4 border-blue-500 w-24 h-24 object-cover"
        />
      </div>
      <Stack direction={isMobile ? "column" :"row"} spacing={16} ><VStack spacing={16} style={{ minWidth: isMobile ? "100%" : "200px" }} >
      <Text className="flex items-center gap-2 text-sm">
          <FaBalanceScale className="text-purple-500" />
          <span className="font-semibold">نوع پرونده:</span>{" "}
          <Badge color={caseInfo.caseType === "حقوقی" ? "blue" : "red"} >
            {caseInfo.caseType}
          </Badge>
        </Text>
        <Text className="flex items-center gap-2 text-sm">
          <FaUserTie className="text-blue-500" />
          <span className="font-semibold">خواهان/شاکی:</span> {caseInfo.plaintiff}
        </Text>

        <Text className="flex items-center gap-2 text-sm">
          <FaUser className="text-red-500" />
          <span className="font-semibold">خوانده/متشاکی عنه:</span> {caseInfo.defendant}
        </Text>
        <Text className="flex items-center gap-2 text-sm">
          <GoLaw className="text-purple-600" />
          <span className="font-semibold">مرجع قضایی</span> {caseInfo.courtName}
        </Text>

       
      </VStack>

      {/* Right Column: Client Info & Case ID */}
      <VStack spacing={16} style={{ minWidth: isMobile ? "100%" : "200px" }}>
        <Text className="flex items-center gap-2 text-sm">
          <FaUser className="text-green-500" />
          <span className="font-semibold">نام موکل:</span> {caseInfo.clientFullName}
        </Text>

        <Text className="flex items-center gap-2 text-sm">
          <FaIdCard className="text-gray-600" />
          <span className="font-semibold">کد ملی:</span> {caseInfo.nationalId}
        </Text>

        

        <Text className="flex items-center gap-2 text-sm">
          <FaFileAlt className="text-orange-500" />
          <span className="font-semibold">شماره پرونده:</span> {caseInfo.proceedingNumber}
        </Text>
        <Text className="flex items-center gap-2 text-sm">
          <FaPhoneFlip className="text-orange-500" />
          <span className="font-semibold">شماره تماس</span> {caseInfo.phoneNumber}
        </Text>
      </VStack>
      </Stack>
      <HStack alignItems="center" justifyContent="center" className=" flex"   >
       <ImageUploader title="آپلود مدرک"/>
      </HStack>

     
    
    </VStack>
  );
};

// Simple inline Badge component (if you don't have one)
const Badge = ({ children, color,className }: { children: React.ReactNode; color: string ,className?:string}) => {
  return (
    <span
      className={`${className} text-xs font-medium px-2 py-1 rounded-full capitalize ${
        color === "blue"
          ? "bg-blue-100 text-blue-800"
          : color === "red"
          ? "bg-red-100 text-red-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {children}
    </span>
  );
};

export default CaseInfo;