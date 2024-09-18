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
import FandqContent from "../content/FandqContent";
import { useRouter } from 'next/navigation';

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
  const [formVisible, setFormVisible] = useState(true);
  const showPopup = (message: string) => {
    setPopupMessage(message || "");
    setPopupVisible(true);
  };

  const router = useRouter();

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
          "https://lcdkhoacntt1-1-c9938135.deta.app/api/ctv-2024",
          formData
        );
        console.log("API response:", response.data);
        showPopup("Đăng ký thành công!");
        setFormVisible(false);
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
          Đã hết hạn đăng ký
        </h1>
             
      
  {popupVisible && <Popup message={popupMessage || ""} onClose={handleClosePopup} />}

    <div className='w-full h-full bg-transparent text-neutral-800 z-20 mb-4 items-center justify-center flex my-4'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logo.svg" width={200} height={200} alt="Main Logo"/>
          <div className='w-auto h-auto md:mx-16 px-[1rem]  gap-4'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4 w-full text-center md:text-left'>Thông tin liên hệ</h3>
            <span className='flex w-full mb-3 items-center flex-col md:flex-row gap-4'>
              <FontAwesomeIcon icon={faFacebook}  width={20} height={20}/>
              <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className='ml-4'>
                Liên chi Đoàn Khoa CNTT1 - PTIT
              </a>
            </span>
            <span className='flex w-full items-center justify-center mb-3 flex-col md:flex-row gap-5'>
                <FontAwesomeIcon icon={faPhone} width={20} height={20} className="flex justify-items-start"/>
                <span className="flex flex-col md:ml-4 md:flex-row gap-4">
                  <div className=" sm:ml-0 sm:mr-6 flex flex-col items-center md:items-start justify-center md:justify-start">
                    <p className="font-bold">033.585.0230</p>
                    <p>Hà Mạnh Dũng{" (Bí thư)"}</p>
                  </div>
                  <div className=" sm:ml-0 sm:mr-6 flex flex-col items-center md:items-start justify-center md:justify-start">
                    <p className="font-bold">039.454.4566</p>
                    <p>Nguyễn Nhật Thành{" (Phó Bí thư)"}</p>
                  </div>
                  <div className=" sm:ml-0 flex flex-col items-center justify-center md:items-start md:justify-start">
                    <p className="font-bold">098.842.9911</p>
                    <p>Nguyễn Thạc Anh{" (Phó Bí thư)"}</p>
                  </div>
                </span>
            </span>
            <span className='flex w-full items-center flex-col md:flex-row gap-4'>
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
