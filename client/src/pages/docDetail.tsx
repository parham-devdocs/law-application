import CaseInfo from "../components/docDetail/caseInfo"
import {  VStack } from "rsuite"

const docDetail = () => {
  return (
   <VStack className=" w-full h-full" alignItems="center" justifyContent="center">
    <CaseInfo />
   </VStack>
  )
}

export default docDetail