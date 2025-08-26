

import { useEffect, useState } from 'react'
import { Button, Stack, Text, VStack } from 'rsuite';

const Timer = ({startTimer}:{startTimer:()=>void}) => {
    const [timer,setTimer]=useState(120)
    const [isResendCodeButtonDisabled,setIsResendCodeButtonDisabled]=useState(true)
    useEffect(()=>{
    const timeout=    setTimeout(() => {
            setTimer((e)=>timer-1)
        }, 1000);
        if (timer===0) {
            clearTimeout(timeout)
            setIsResendCodeButtonDisabled(false)
        }
    },[timer,setTimer])
    function resendCode() {
        setIsResendCodeButtonDisabled(true)
        setTimer(5)
    }
  return (
    <VStack alignItems="center">
        <Stack 
  alignItems="center" 
  justifyContent="center" 
  className='
    w-14 h-14 
    rounded-full 
    bg-blue-500
    border-4 border-white 
    shadow-2xl 
    animate-pulse
    

  '

>
  <Text 
    className='
      font-bold text-white text-lg drop-shadow-md
    '
    style={{
        color:"white",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      fontVariantNumeric: 'tabular-nums' // Keeps numbers aligned
    }}
  >
    {timer}
  </Text>

</Stack> 
          <Button disabled={isResendCodeButtonDisabled}  onClick={resendCode} appearance="link">ارسال مجدد کد</Button>

    </VStack>
 )
}

export default Timer