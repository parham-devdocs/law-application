import { FaExclamationCircle } from "react-icons/fa"
import { Button, Stack, Text, VStack } from "rsuite"

const notFound = () => {
  return (
    <div className="flex items-center justify-center mt-40 px-4">
    <VStack 
      alignItems="center" 
      spacing={20} 
      className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg text-center"
    >
      {/* Icon */}
      <FaExclamationCircle className="text-red-500 w-16 h-16" />
  
      {/* Text */}
      <Text className="text-gray-800 font-semibold text-lg">
        صفحه مورد نظر یافت نشد
      </Text>
  
      {/* Description */}
      <Text className="text-gray-600 text-sm">
        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
      </Text>
  
      {/* Back Home Button */}
      <Button 
       href="/" 
        appearance="primary" 
        color="blue"
        className="px-6 py-2"
      >
        بازگشت به صفحه اصلی
      </Button>
    </VStack>
  </div>
  )
}

export default notFound