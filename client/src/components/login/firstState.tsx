
import { Button, Form, Stack, Text } from "rsuite";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const FirstState = ({onStateChange}:{onStateChange:()=>void}) => {
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ usernameError: string; passwordError: string }>({
    usernameError: "",
    passwordError: "",
  });

  // Handle input changes and clear errors immediately
  const changeHandler = (e: ChangeEvent<HTMLInputElement>, input: "username" | "password") => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [input]: value }));

    // Clear error as user types
    if (value && ((input === "username" && errors.usernameError) || (input === "password" && errors.passwordError))) {
      setErrors((prev) => ({
        ...prev,
        [input + "Error"]: "",
      }));
    }
  };

  // Handle form submission
  const submitHandler = () => {
    let valid = true;
    let newErrors = { usernameError: "", passwordError: "" };

    if (!formData.username) {
      newErrors.usernameError = "نام کاربری الزامی است";
      valid = false;
    }

    if (!formData.password) {
      newErrors.passwordError = "رمز عبور الزامی است";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      toast.success("کد ارسال شد ");
      onStateChange()
      console.log("Logging in...", formData);
    }
  };

  return (
  

    

      <Form
        onSubmit={(e) => {
          submitHandler();
        }}
        className="z-50 lg:w-[400px] flex flex-col items-center justify-center md:w-80 w-11/12 max-w-md p-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 transition-all duration-300 hover:shadow-3xl"
      >
        <Text
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 mb-6"
          align="center"
        >
          ورود
        </Text>

        {/* Username Field */}
        <Form.Group controlId="username" className="mb-6 " >
          <Form.ControlLabel>نام کاربری</Form.ControlLabel>
          <Form.Control
            name="username"
            value={formData.username}
            onChange={(value: string, event: React.ChangeEvent<HTMLInputElement>) =>
              changeHandler(event, "username")
            }
            className="w-full text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 placeholder-gray-400"
          />
          {errors.usernameError && (
            <Text style={{color:"red",marginTop:"2px"}} >{errors.usernameError}</Text>
          )}
        </Form.Group>

        {/* Password Field */}
        <Form.Group controlId="password" className="mb-6">
          <Form.ControlLabel>رمز عبور</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            value={formData.password}
            onChange={(value: string, event: React.ChangeEvent<HTMLInputElement>) =>
              changeHandler(event, "password")
            }
            className="w-full text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 placeholder-gray-400"
          />
          {errors.passwordError && (
            <Text style={{color:"red",marginTop:"2px"}} >{errors.passwordError}</Text>
          )}
        </Form.Group>

        {/* Submit Button */}
        <Button
          type="submit"
          appearance="primary"
          block
          className="py-3 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-purple-700 shadow-lg hover:from-blue-600 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          ورود به سیستم
        </Button>
      </Form>
  );
};

export default FirstState