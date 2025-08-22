import { Stack } from "rsuite";
import image from "../../assets/Project-Documentation-4-scaled.jpeg";
import { useState } from "react";
import pdf from "../../assets/English Vocabulary in Use Advanced 3rd Edition [www.languagecentre.ir].pdf";
import pdfImage from "../../assets/images.png";
import { DocumentType } from "../../types";
import { HiDownload } from "react-icons/hi";

const Gallery = () => {
  const [documents] = useState<DocumentType[]>([
    { src: image, name: "Project Proposal" },
    { src:pdf , name: "Final Documentation" },
    { src: image, name: "Project Proposal" },
    { src:pdf , name: "Final Documentation" },
    { src: image, name: "Project Proposal" },
    { src:pdf , name: "Final Documentation" },
    { src: image, name: "Project Proposal" },
    { src:pdf , name: "Final Documentation" },
    // Add more documents as needed
  ]);

  return (
    <Stack
      direction="row"
      wrap
      alignItems="center"
      justifyContent="center"
      spacing={30}
      className="w-full max-w-6xl p-4 mx-auto relative"
    >
      {documents.map((doc, index) => (
        <Stack
          key={index}
          className="flex flex-col items-center border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          spacing={8}
        >
          {/* Image */}
          <div className="flex-shrink-0 overflow-hidden rounded-md shadow-inner">
  {doc.src.includes(".pdf") ? (
    <a
      href={doc.src}
      download={doc.name + ".pdf"}
      className="  text-white cursor-pointer p-1 relative group  text-xs rounded hover:bg-blue-700 transition-colors inline-block text-center"
    >
      <img
        src={pdfImage}
        alt={`${doc.name} document`}
        className="w-full h-[180px] object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80" // Fixed size
      />
       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <HiDownload className="text-white bg-blue-500 rounded-md p-1 text-3xl drop-shadow-lg" />
        </div>
      <span>{doc.name}</span>
    </a>
  ) : (

    <div className="flex flex-col items-center cursor-pointer">
      <a
        href={doc.src}
        download={doc.name}
        className="group relative block"
      >
        <img
          src={doc.src}
          alt={`${doc.name} document`}
          className="w-full h-[180px] object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80"
        />
    
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <HiDownload className="text-white bg-blue-500 rounded-md p-1 text-3xl drop-shadow-lg" />
        </div>
    
        <span className="mt-1 text-center w-full text-sm">{doc.name}</span>
      </a>
    </div>
  )}
</div>
        </Stack>
      ))}
 </Stack>
  );
};

export default Gallery;