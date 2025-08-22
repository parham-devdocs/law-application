import type { DocumentType } from "@/types";
import { FaTimes } from "react-icons/fa";
import { IconButton, Stack } from "rsuite";

const ImageMaximizer = ({ imageInfo, onCloseHandler }: { imageInfo: DocumentType; onCloseHandler: () => void }) => {
  return (
    <Stack
      className="relative w-[90%] h-[90%] lg:w-4/5 lg:h-4/5  rounded-lg  overflow-hidden"
      justifyContent="center"
      alignItems="center"
    >
     
      <div className="w-full h-full flex items-center justify-center p-2">
        <img
          src={imageInfo.src}
          alt={imageInfo.name}
          className=" object-contain rounded-md"
          style={{ imageRendering: "auto" }}
        />
         <IconButton
        icon={<FaTimes />}
        appearance="primary"
        circle
        color="cyan"
        onClick={onCloseHandler}
        className="absolute -top-30 -right-11 z-20"
                size="sm"
      />
      </div>

      <p className="text-center absolute bottom-0  w-5/6 mx-auto bg-white text-gray-700 text-sm bg-opacity-50  py-1 px-2 rounded-t-none rounded-b-md">
        {imageInfo.name}
      </p>
    </Stack>
  );
};

export default ImageMaximizer;