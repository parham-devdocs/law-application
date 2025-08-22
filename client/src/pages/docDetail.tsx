import Gallery from "../components/docDetail/gallery"
import CaseInfo from "../components/docDetail/caseInfo"
import {  VStack } from "rsuite"
import PaginationComponent from "../components/pagination"

const docDetail = () => {
  return (
   <VStack className=" w-full h-full" alignItems="center" justifyContent="center" spacing={30}>
    <CaseInfo />
    <Gallery/>
    <PaginationComponent onChangeHandler={(p)=>console.log(p)}/>
   </VStack>
  )
}

export default docDetail