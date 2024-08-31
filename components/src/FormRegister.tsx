"use client";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "./popup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { majors } from ".";

interface FormData {
  fullname: string;
  sex: string;
  birthDate: string;
  placeOfOrigin: string;
  className: string;
  studentCode: string;
  major: string;
  email: string;
  facebook: string;
  describeYourself: string;
  strengthness: string;
  weakness: string;
  knowUsThrough: string;
  reason: string;
  aspiration: string;
  question: string;
  phoneNumber: string;
  status: string;
}

interface FormErrors {
  [key: string]: string;
}
interface Province {
  code: string;
  name: string;
}




const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    sex: "",
    birthDate: '""',
    placeOfOrigin: "",
    className: "",
    major: "",
    studentCode: "",
    email: "",
    facebook: "",
    describeYourself: "",
    strengthness: "",
    weakness: "",
    knowUsThrough: "",
    reason: "",
    aspiration: "",
    question: "",
    phoneNumber: "",
    status: "submitted", // default status
  });
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({}); // State to hold errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  const showPopup = (message: string) => {
    setPopupMessage(message || "");
    setPopupVisible(true);
  };

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('https://provinces.open-api.vn/api/');
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
    setPopupMessage(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      birthDate: date ? date.toISOString().split('T')[0] : '', // Store as YYYY-MM-DD
      
    });
  };
  
  const validate = (): boolean => {
    let valid = true;
    let errors: FormErrors = {};
    
  
    if (!formData.birthDate) {
      errors.birthDate = 'Ngày sinh không hợp lệ.';
      valid = false;
    } else {
      const date = new Date(formData.birthDate);
      const today = new Date();
  
      // Zero out the time component for both dates
      date.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
  
      if (isNaN(date.getTime()) || date > today) {
        errors.birthDate = 'Ngày sinh không tồn tại hoặc lớn hơn ngày hiện tại.';
        valid = false;
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = "Email không hợp lệ.";
      valid = false;
    }

    setErrors(errors); // Set errors to state


    const phonePattern = /^0\d{9,10}$/;
    if (!phonePattern.test(formData.phoneNumber)) {
      errors.phoneNumber = "Số điện thoại không hợp lệ. Số điện thoại phải bắt đầu bằng số 0 và có 10-11 chữ số.";
      valid = false;
    }
    if (!valid) {
      const errorMessages = Object.values(errors).join("\n");
      showPopup(`Vui lòng kiểm tra lại các trường sau:\n${errorMessages}`);
    }

    return valid;
  };

  const fieldNamesMapping: { [key: string]: string } = {
    fullname: "Họ và tên",
    birthDate: "Ngày sinh",
    email: "Email",
    phoneNumber: "Số điện thoại",
    sex: "Giới tính",
    placeOfOrigin: "Quê quán",
    className: "Lớp",
    major: "Ngành học",
    studentCode: "Mã sinh viên",
    describeYourself: "Giới thiệu bản thân",
    facebook: "Facebook",
    strengthness: "Điểm mạnh",
    weakness: "Điểm yếu",
    knowUsThrough: "Bạn biết đến Liên chi qua",
    reason: "Lý do bạn muốn trở thành CTV của Liên chi",
    aspiration: "Nguyện vọng"
};

  const validateRequiredFields = () => {
    const requiredFields = ["fullname", "birthDate", "email", "phoneNumber","sex","placeOfOrigin","className","major","studentCode","describeYourself","facebook","strengthness",
      "weakness","knowUsThrough","reason","aspiration"
    ]; 
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]?.trim());
    return missingFields.map(field => fieldNamesMapping[field]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missingFields = validateRequiredFields();

    if (missingFields.length > 0) {
      showPopup(`Vui lòng điền các mục sau: ${missingFields.join(", ")}`);
      return; 
    }

    if (validate()) {
      setIsSubmitting(true); // Start loading spinner
      try {
        const response = await axios.post(
          "https://demoitis-1-t9269927.deta.app/CTV-2024",
          formData
        );
        console.log("API response:", response.data);
        showPopup("Đăng ký thành công!");
      } catch (error) {
        console.error("API error:", error);
        showPopup("Đã xảy ra lỗi. Vui lòng check lại form.");
      } finally {
        setIsSubmitting(false); // Stop loading spinner
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center mt-[2rem] py-[4rem]">
      
      <div className="h-full w-full flex flex-col items-center ">
        <img src="/title.png" width={720} alt="" className="" />
        <div className="w-full px-10 flex flex-col items-center">
          <h1 className="w-full text-center text-neutral-800 font-semibold text-xl lg:text-2xl ">
            Liên chi Đoàn Khoa Công nghệ Thông tin 1 tuyển{" "}
            <span className="font-bold text-[#dd3b51]">
              Cộng tác viên
            </span>{" "}
            năm học 2024-2025
          </h1>
          <div className="w-full flex gap-4 flex-col items-center justify-center my-[2rem]">
            <span className=" rounded-md border-gray-800 border-solid ">
              <ul className="flex flex-col lg:flex-row gap-4">
                <li className="px-4 py-3 bg-[#fcc0c0] border-[#b16969] border-2 rounded-md font-bold text-center">
                  Nhận CV: 05/09 - 12h00 18/09
                </li>
                <li className="px-4 py-3 bg-[#bcdafc] border-[#698bb1] border-2 rounded-md font-bold text-center">
                  Phỏng vấn: 22/09
                </li>
                <li className="px-4 py-3 bg-[#c2ffc5] border-[#69b195] border-2 rounded-md font-bold text-center">
                  Training: tháng 10/2024 - tháng 01/2025
                </li>
              </ul>
            </span>
            <span className="text-center">
              <p>
                Đối tượng: Các bạn sinh viên Khóa D23 và D24 ngành <span className="font-bold text-red-500 text-xl">CNTT, CNTT
                CLC, CNTT Việt-Nhật, KHMT, ATTT</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col z-[30] rounded-xl overflow-y-auto mt-[2rem]">
      
        <h1 className="text-neutral-800 w-full text-center font-bold text-2xl md:text-4xl mb-4">
          ĐĂNG KÝ
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="bg-slate-200 w-full rounded-lg px-8 pt-6 pb-4 mb-5 shadow-lg shadow-[#b3b3b3]/50">
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block mb-2 font-bold"
              >
                Họ và tên:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Họ và tên đầy đủ của bạn là gì, hãy cho chúng mình biết nhé"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="sex"
                  className="block mb-2 font-bold"
                >
                  Giới tính:<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Nam"
                      checked={formData.sex === "Nam"}
                      onChange={handleChange}
                      className="mr-2"
                    />{" "}
                    Nam
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Nữ"
                      checked={formData.sex === "Nữ"}
                      onChange={handleChange}
                      className="mr-2"
                    />{" "}
                    Nữ
                  </label>
                </div>
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="birthDate"
                  className="block mb-2 font-bold"
                >
                  Ngày sinh:<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Cho chúng mình biết sinh nhật của bạn nhé"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md" 
                 
                />
                
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="placeOfOrigin"
                  className="block mb-2 font-bold"
                >
                  Quê quán:<span className="text-red-500">*</span>
                </label>
                <select
                name="placeOfOrigin"
                value={formData.placeOfOrigin}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                
              >
                <option value="" disabled>Chọn nơi bạn sinh ra</option>
                {provinces.map((province) => (
                  <option key={province.code} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="className"
                  className="block mb-2 font-bold"
                >
                  Lớp:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Bạn đến từ lớp nào vậy ?"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                 
                />
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="studentCode"
                  className="block mb-2 font-bold"
                >
                  Mã sinh viên:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mã sinh viên của bạn là gì vậy ?"
                  name="studentCode"
                  value={formData.studentCode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                 
                />
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="major"
                  className="block mb-2 font-bold"
                >
                  Ngành học:<span className="text-red-500">*</span>
                </label>
                <select
        name="major"
        value={formData.major}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md"
     
      >
        <option value="" disabled>Chọn ngành học của bạn</option>
        {majors.map((major, index) => (
          <option key={index} value={major}>
            {major}
          </option>
        ))}
      </select>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 font-bold"
                >
                  Email:<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email của bạn là gì?"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
               
                  />
                
                </div>
                
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 font-bold"
                >
                  Số điện thoại:<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Chúng mình liên hệ với bạn qua số điện thoại nào ?"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
              
                  />
                  
                </div>
              </div>

              <div className="mb-4 w-full">
                <label
                  htmlFor="facebook"
                  className="block mb-2 font-bold"
                >
                  Facebook:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Link Facebook cá nhân của bạn"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
               
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="describeYourself"
                className="block mb-2 font-bold"
              >
                Giới thiệu bản thân:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder={`Hãy giới thiệu đôi nét về bản thân mình nhé:\n
                - Sở thích\n
                - Tính cách\n
                - Kỹ năng của bản thân\n
                - Kinh nghiệm trong tổ chức sự kiện\n
                - ...\n
                Mục này bạn hãy ghi một cách chi tiết nhất có thể nhé :>
                `}
                name="describeYourself"
                value={formData.describeYourself}
                onChange={handleChange}
                style={{ width: '100%', minHeight: '200px' }}
                className="w-full p-2 border border-gray-300 rounded-md custom-placeholder"
          
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="strengthness"
                className="block mb-2 font-bold"
              >
                Điểm mạnh:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Điểm mạnh của bạn là gì?"
                name="strengthness"
                value={formData.strengthness}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
           
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="weakness"
                className="block mb-2 font-bold"
              >
                Điểm yếu:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Điểm yếu của bạn là gì?"
                name="weakness"
                value={formData.weakness}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
           
              />
            </div>
          </div>
          <div className="bg-slate-200 w-full rounded-lg px-8 pt-6 pb-4 mb-5 shadow-lg shadow-[#b3b3b3]/50">
            <div className="mb-4">
              <label
                htmlFor="knowUsThrough"
                className="block mb-2 font-bold"
              >
                Bạn biết đến Liên chi qua:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Bạn biết đến Liên chi qua đâu?"
                name="knowUsThrough"
                value={formData.knowUsThrough}
                onChange={handleChange}
                
                className="w-full p-2 border border-gray-300 rounded-md"
        
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="block mb-2 font-bold"
              >
                Lý do tham gia:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Lý do tại sao bạn quyết định tham gia vào Liên chi Đoàn Khoa CNTT1?"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                style={{ width: '100%', minHeight: '150px' }}
                className="w-full p-2 border border-gray-300 rounded-md"
             
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="aspiration"
                className="block mb-2 font-bold"
              >
                Nguyện vọng:<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Nguyện vọng của bạn khi tham gia Liên chi?"
                name="aspiration"
                value={formData.aspiration}
                onChange={handleChange}
                style={{ width: '100%', minHeight: '150px' }}
                className="w-full p-2 border border-gray-300 rounded-md"
           
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="question"
                className="block mb-2 font-bold"
              >
                Câu hỏi:
              </label>
              <textarea
                placeholder="Bạn có câu hỏi gì không?"
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>         
          
          <div className='flex justify-center'>
          <button
    type="submit"
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded ${
      isSubmitting ? "cursor-not-allowed opacity-75" : ""
    }`}
    disabled={isSubmitting} // Disable button while submitting
  >
    {isSubmitting ? (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    ) : (
      "Gửi đăng ký"
    )}
  </button>
          </div>
          
        </form>
        
      
  {popupVisible && <Popup message={popupMessage || ""} onClose={handleClosePopup} />}

    <div className='w-full h-full bg-transparent text-neutral-800 z-20 mb-4 items-center justify-center flex my-4'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logo.svg" width={200} height={200} alt="Main Logo"/>
          <div className='w-auto h-auto md:mx-16 px-[1rem]'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4'>Thông tin liên hệ</h3>
            <span className='flex w-full mb-3 items-center '>
              <FontAwesomeIcon icon={faFacebook}  width={20} height={20}/>
              <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className='ml-4'>
                Liên chi Đoàn Khoa CNTT1 - PTIT
              </a>
            </span>
            <span className='flex w-full items-center mb-3'>
                <FontAwesomeIcon icon={faPhone} width={20} height={20} className="flex justify-items-start"/>
              <span>
                <p className='ml-4'>033.585.0230 - Hà Mạnh Dũng - Bí thư</p>
                <p className='ml-4'>039.454.4566 - Nguyễn Nhật Thành - Phó Bí thư</p>
                <p className='ml-4'>098.842.9911 - Nguyễn Thạc Anh - Phó Bí thư</p>
              </span>
            </span>
            <span className='flex w-full items-center'>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20}/>
                <p className='ml-4'>bch.cntt.ptit@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      
      </div></div>
    </div>
  );
};

export default FormRegister;
