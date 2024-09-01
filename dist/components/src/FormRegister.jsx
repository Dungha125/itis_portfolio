"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "./popup";
import 'react-datepicker/dist/react-datepicker.css';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { majors } from ".";
var FormRegister = function () {
    var _a = useState({
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
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState([]), provinces = _b[0], setProvinces = _b[1];
    var _c = useState(false), popupVisible = _c[0], setPopupVisible = _c[1];
    var _d = useState(null), popupMessage = _d[0], setPopupMessage = _d[1];
    var _e = useState({}), errors = _e[0], setErrors = _e[1]; // State to hold errors
    var _f = useState(false), isSubmitting = _f[0], setIsSubmitting = _f[1];
    var showPopup = function (message) {
        setPopupMessage(message || "");
        setPopupVisible(true);
    };
    useEffect(function () {
        var fetchProvinces = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get('https://provinces.open-api.vn/api/')];
                    case 1:
                        response = _a.sent();
                        setProvinces(response.data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error fetching provinces:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchProvinces();
    }, []);
    var handleClosePopup = function () {
        setPopupVisible(false);
        setPopupMessage(null);
    };
    var handleChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[name] = value, _a)));
    };
    var handleDateChange = function (date) {
        setFormData(__assign(__assign({}, formData), { birthDate: date ? date.toISOString().split('T')[0] : '' }));
    };
    var validate = function () {
        var valid = true;
        var errors = {};
        if (!formData.birthDate) {
            errors.birthDate = 'Ngày sinh không hợp lệ.';
            valid = false;
        }
        else {
            var date = new Date(formData.birthDate);
            var today = new Date();
            // Zero out the time component for both dates
            date.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            if (isNaN(date.getTime()) || date > today) {
                errors.birthDate = 'Ngày sinh không tồn tại hoặc lớn hơn ngày hiện tại.';
                valid = false;
            }
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.email = "Email không hợp lệ.";
            valid = false;
        }
        setErrors(errors); // Set errors to state
        var phonePattern = /^0\d{9,10}$/;
        if (!phonePattern.test(formData.phoneNumber)) {
            errors.phoneNumber = "Số điện thoại không hợp lệ. Số điện thoại phải bắt đầu bằng số 0 và có 10-11 chữ số.";
            valid = false;
        }
        if (!valid) {
            var errorMessages = Object.values(errors).join("\n");
            showPopup("Vui l\u00F2ng ki\u1EC3m tra l\u1EA1i c\u00E1c tr\u01B0\u1EDDng sau:\n".concat(errorMessages));
        }
        return valid;
    };
    var fieldNamesMapping = {
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
    var validateRequiredFields = function () {
        var requiredFields = ["fullname", "birthDate", "email", "phoneNumber", "sex", "placeOfOrigin", "className", "major", "studentCode", "describeYourself", "facebook", "strengthness",
            "weakness", "knowUsThrough", "reason", "aspiration"
        ];
        var missingFields = requiredFields.filter(function (field) { var _a; return !((_a = formData[field]) === null || _a === void 0 ? void 0 : _a.trim()); });
        return missingFields.map(function (field) { return fieldNamesMapping[field]; });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var missingFields, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    missingFields = validateRequiredFields();
                    if (missingFields.length > 0) {
                        showPopup("Vui l\u00F2ng \u0111i\u1EC1n c\u00E1c m\u1EE5c sau: ".concat(missingFields.join(", ")));
                        return [2 /*return*/];
                    }
                    if (!validate()) return [3 /*break*/, 5];
                    setIsSubmitting(true); // Start loading spinner
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios.post("https://demoitis-1-t9269927.deta.app/CTV-2024", formData)];
                case 2:
                    response = _a.sent();
                    console.log("API response:", response.data);
                    showPopup("Đăng ký thành công!");
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error("API error:", error_2);
                    showPopup("Đã xảy ra lỗi. Vui lòng check lại form.");
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false); // Stop loading spinner
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="w-full h-full flex flex-col items-center mt-[2rem] py-[4rem]">
      
      <div className="h-full w-full flex flex-col items-center ">
        <img src="/title.png" width={720} alt="" className=""/>
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
              <label htmlFor="fullname" className="block mb-2 font-bold">
                Họ và tên:<span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Họ và tên đầy đủ của bạn là gì? Hãy cho chúng mình biết nhé" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="sex" className="block mb-2 font-bold">
                  Giới tính:<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center">
                    <input type="radio" name="sex" value="Nam" checked={formData.sex === "Nam"} onChange={handleChange} className="mr-2"/>{" "}
                    Nam
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="sex" value="Nữ" checked={formData.sex === "Nữ"} onChange={handleChange} className="mr-2"/>{" "}
                    Nữ
                  </label>
                </div>
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="birthDate" className="block mb-2 font-bold">
                  Ngày sinh:<span className="text-red-500">*</span>
                </label>
                <input type="date" placeholder="Cho chúng mình biết sinh nhật của bạn nhé" name="birthDate" value={formData.birthDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
                
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="placeOfOrigin" className="block mb-2 font-bold">
                  Quê quán:<span className="text-red-500">*</span>
                </label>
                <select name="placeOfOrigin" value={formData.placeOfOrigin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="" disabled>Chọn nơi bạn sinh ra</option>
                {provinces.map(function (province) { return (<option key={province.code} value={province.name}>
                    {province.name}
                  </option>); })}
              </select>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="className" className="block mb-2 font-bold">
                  Lớp:<span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="VD: D24CQ..." name="className" value={formData.className} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="studentCode" className="block mb-2 font-bold">
                  Mã sinh viên:<span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="VD: B24DC..." name="studentCode" value={formData.studentCode} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="major" className="block mb-2 font-bold">
                  Ngành học:<span className="text-red-500">*</span>
                </label>
                <select name="major" value={formData.major} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
        <option value="" disabled>Chọn ngành học của bạn</option>
        {majors.map(function (major, index) { return (<option key={index} value={major}>
            {major}
          </option>); })}
      </select>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="email" className="block mb-2 font-bold">
                  Email:<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="email" placeholder="Email của bạn là gì?" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
                
                </div>
                
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="phoneNumber" className="block mb-2 font-bold">
                  Số điện thoại:<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="text" placeholder="Chúng mình liên hệ với bạn qua số điện thoại nào ?" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
                  
                </div>
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="facebook" className="block mb-2 font-bold">
                  Facebook:<span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Link Facebook cá nhân của bạn" name="facebook" value={formData.facebook} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="describeYourself" className="block mb-2 font-bold">
                Giới thiệu bản thân:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder={"B\u1EA1n h\u00E3y gi\u1EDBi thi\u1EC7u chi ti\u1EBFt v\u1EC1 b\u1EA3n th\u00E2n m\u00ECnh nh\u00E9:\n\n                - S\u1EDF th\u00EDch\n\n                - T\u00EDnh c\u00E1ch\n\n                - K\u1EF9 n\u0103ng c\u1EE7a b\u1EA3n th\u00E2n\n\n                - Kinh nghi\u1EC7m trong t\u1ED5 ch\u1EE9c s\u1EF1 ki\u1EC7n\n\n                ...\n                "} name="describeYourself" value={formData.describeYourself} onChange={handleChange} style={{ width: '100%', minHeight: '200px' }} className="w-full p-2 border border-gray-300 rounded-md custom-placeholder"/>
            </div>

            <div className="mb-4">
              <label htmlFor="strengthness" className="block mb-2 font-bold">
                Điểm mạnh:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder="Điểm mạnh của bạn là gì?" name="strengthness" value={formData.strengthness} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label htmlFor="weakness" className="block mb-2 font-bold">
                Điểm yếu:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder="Điểm yếu của bạn là gì?" name="weakness" value={formData.weakness} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>
          </div>
          <div className="bg-slate-200 w-full rounded-lg px-8 pt-6 pb-4 mb-5 shadow-lg shadow-[#b3b3b3]/50">
            <div className="mb-4">
              <label htmlFor="knowUsThrough" className="block mb-2 font-bold">
                Bạn biết đến Liên chi qua:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder="Bạn biết đến Liên chi qua đâu?" name="knowUsThrough" value={formData.knowUsThrough} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label htmlFor="reason" className="block mb-2 font-bold">
                Lý do tham gia:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder="Lý do tại sao bạn quyết định tham gia vào Liên chi Đoàn Khoa CNTT1?" name="reason" value={formData.reason} onChange={handleChange} style={{ width: '100%', minHeight: '150px' }} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label htmlFor="aspiration" className="block mb-2 font-bold">
                Nguyện vọng:<span className="text-red-500">*</span>
              </label>
              <textarea placeholder="Nguyện vọng của bạn khi tham gia Liên chi?" name="aspiration" value={formData.aspiration} onChange={handleChange} style={{ width: '100%', minHeight: '150px' }} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label htmlFor="question" className="block mb-2 font-bold">
                Câu hỏi:
              </label>
              <textarea placeholder="Bạn có câu hỏi gì không?" name="question" value={formData.question} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            </div>
          </div>         
          
          <div className='flex justify-center'>
          <button type="submit" className={"bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded ".concat(isSubmitting ? "cursor-not-allowed opacity-75" : "")} disabled={isSubmitting} // Disable button while submitting
    >
    {isSubmitting ? (<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>) : ("Gửi đăng ký")}
  </button>
          </div>
          
        </form>
        
      
  {popupVisible && <Popup message={popupMessage || ""} onClose={handleClosePopup}/>}

    <div className='w-full h-full bg-transparent text-neutral-800 z-20 mb-4 items-center justify-center flex my-4'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logo.svg" width={200} height={200} alt="Main Logo"/>
          <div className='w-auto h-auto md:mx-16 px-[1rem]  gap-4'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4 w-full text-center md:text-left'>Thông tin liên hệ</h3>
            <span className='flex w-full mb-3 items-center flex-col md:flex-row gap-4'>
              <FontAwesomeIcon icon={faFacebook} width={20} height={20}/>
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
    </div>);
};
export default FormRegister;
