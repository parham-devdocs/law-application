import { FormEvent, useEffect, useRef, useState } from "react"
import { Button, Form, HStack, Input, Stack, Text, VStack } from "rsuite"
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import Timer from "./timer"

const SecondState = () => {

const [inputs,setInputs]=useState<string[]>(["","","","",""])
const inputRefs=useRef<(HTMLInputElement | null)[]>([])
const [loginButtonIsDisabled,setLoginButtonIsDisabled]=useState(true)
useEffect(()=>{
    inputRefs.current[0]?.focus();
},[])
    function changeInput(e:string,index:number) {
     const char=e.slice(-1)
       const newInputs=[...inputs]
       newInputs[index]=char
        setInputs(newInputs);   
        const isComplete = newInputs.every(input => input !== "")
setLoginButtonIsDisabled(!isComplete)
          
        
        if (char && index < inputs.length - 1) {
          console.log(index)
            inputRefs.current[index +1]?.focus();
          
          }

    }
    function onSubmit(e:FormEvent) {
      
      e.preventDefault()
      
    }
  return (
    <Form
    onSubmit={onSubmit}
    className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 max-w-xs mx-auto"
    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
  ><VStack alignItems="center" spacing={30}>
    <FaEnvelopeCircleCheck className="text-blue-500" size={40}/>
        <Text style={{textAlign:"center"}}>کد ارسال شده  را وارد نمایید</Text>

        {/* timer */}
        <HStack className=" flex-row-reverse">
          
        {Array.from({ length: 5 }).map((_, index) => (
          <Stack className=" w-10 h-10" >
             <Input
    key={index}
    className="w-8  p-0 text-center rounded-lg border-2 border-blue-400 focus:border-blue-600 focus:ring-0"
    maxLength={1}
 
   // No need to pre-fill, but make sure you assign every ref
ref={(el) => {  inputRefs.current[index] = el; }}
    onChange={(value: string) => changeInput(value, index)}
    style={{
      lineHeight: '1.5', // optional: center text
      textAlign: 'center',
      fontSize: '16px',
      boxSizing: 'border-box',
    }}
  />
          </Stack>

))}        </HStack>
<Timer startTimer={()=>console.log("kk")}/>
<Button block disabled={loginButtonIsDisabled} appearance="primary" onClick={onSubmit} >ورود</Button>
    </VStack>
    </Form>
    
  )
}

export default SecondState