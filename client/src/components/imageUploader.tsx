
import type { ChangeEvent } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi'
import { Button, Uploader,  } from 'rsuite'
import {ToastContainer ,toast }from "react-toastify";
import type { FileType } from 'rsuite/esm/Uploader';
type Appearance = 'default' | 'primary' | 'link' | 'subtle' | 'ghost';
type color= 'red' | 'green' | 'blue' | 'orange' | 'cyan' | 'violet' | 'yellow' 
const ImageUploader = ({title,color="green",appearance="primary"}:{title:string,color?:color,appearance?:Appearance}) => {
    function onSuccessUploadHandler() {
        toast.success("فایل با موفقیت آپلود شد")
    }
    function onErrorUploadHandler() {
        toast.error("خطا در بارگذاری فایل")
    }
  return (
   <div >
  <ToastContainer/>
  <Uploader   listType="picture-text"
  
     action="//jsonplaceholder.typicode.com/posts/"
     autoUpload
     onSuccess={onSuccessUploadHandler}
     onError={onErrorUploadHandler}
     onChange={(fileList: FileType[], event: ChangeEvent<Element> | React.MouseEvent<Element, MouseEvent>) => {
       console.log(fileList, event);
     }} >
               <Button color={color} appearance={appearance} startIcon={<HiOutlineDocumentText/>} className=' mx-auto'>{title}</Button>
     </Uploader>
   </div>
   
  )
}

export default ImageUploader