"use client"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';

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
  birthDate?: string;
  email?: string;
}

const FormRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    sex: '',
    birthDate: '',
    placeOfOrigin: '',
    className: '',
    major:'',
    studentCode: '',
    email: '',
    facebook: '',
    describeYourself: '',
    strengthness: '',
    weakness: '',
    knowUsThrough: '',
    reason: '',
    aspiration: '',
    question: '',
    phoneNumber: '',
    status: 'submitted', // default status
  });

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    let valid = true;
    let errors: FormErrors = {};

    // Validate Date of Birth
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(formData.birthDate)) {
      errors.birthDate = 'Ngày sinh không hợp lệ (định dạng: DD/MM/YYYY).';
      valid = false;
    } else {
      const date = new Date(formData.birthDate);
      const today = new Date();
      if (isNaN(date.getTime()) || date > today) {
        errors.birthDate = 'Ngày sinh không tồn tại hoặc lớn hơn ngày hiện tại.';
        valid = false;
      }
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Email không hợp lệ.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('https://demoitis-1-t9269927.deta.app/CTV-2024', formData);
        console.log('API response:', response.data);
        setPopupMessage('Đăng ký thành công!');
      } catch (error) {
        console.error('API error:', error);
        setPopupMessage('Đã xảy ra lỗi. Vui lòng check lại form.');
      }
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center mt-[2rem] '>
      <div className='h-full w-full flex flex-col items-center '>
        <img src="/title.png" width={720} alt="" className=''/>
        <div className='w-full px-10 flex flex-col items-center'>
          <h1 className='w-full text-center text-neutral-800 font-semibold text-xl lg:text-2xl '>Liên chi Đoàn Khoa Công nghệ Thông tin 1 tuyển <span className='font-bold text-[#dd3b51]'>Cộng tác viên</span> năm học 2024-2025</h1>
          <div className='w-full flex gap-4 flex-col items-center justify-center my-[2rem]'>
            <span className=' rounded-md border-gray-800 border-solid '>
              <ul className='flex flex-col lg:flex-row gap-4'>
              <li className='px-4 py-3 bg-[#fcc0c0] border-[#b16969] border-2 rounded-md font-bold text-center'>Nhận CV: 05/09 - 12h00 18/09</li>
              <li className='px-4 py-3 bg-[#bcdafc] border-[#698bb1] border-2 rounded-md font-bold text-center'>Phỏng vấn: 22/09</li>
              <li className='px-4 py-3 bg-[#c2ffc5] border-[#69b195] border-2 rounded-md font-bold text-center'>Tranning: tháng 10/2024 - tháng 01/2025</li>
              </ul>
            </span>
            <span className='text-center'>
              <p>Đối tượng: Tất cả sinh viên Khóa D23 và D24 ngành CNTT, CNTT CLC, CNTT Việt-Nhật, KHMT, ATTT.</p>
            </span>
          </div>
        </div>
        </div>
      <div className='w-full h-auto flex flex-col z-[30] rounded-xl overflow-y-auto mt-[2rem]'>
        <h1 className='text-neutral-800 w-full text-center font-bold text-2xl md:text-4xl mb-4'>ĐĂNG KÝ</h1>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='bg-slate-200 w-full rounded-lg px-8 pt-6 pb-4 mb-5 shadow-lg shadow-[#b3b3b3]/50'>
            <div className='mb-4'>
              <label htmlFor="fullname" className='block mb-2 font-bold'>Họ và tên:</label>
              <input
                type="text"
                placeholder="Họ và tên"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='mb-4 w-full'>
                <label htmlFor="sex" className='block mb-2 font-bold'>Giới tính:</label>
                <div className='flex gap-4 items-center'>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="sex"
                      value="Nam"
                      checked={formData.sex === 'Nam'}
                      onChange={handleChange}
                      className='mr-2'
                    /> Nam
                  </label>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="sex"
                      value="Nữ"
                      checked={formData.sex === 'Nữ'}
                      onChange={handleChange}
                      className='mr-2'
                    /> Nữ
                  </label>
                </div>
              </div>

              <div className='mb-4 w-full'>
                <label htmlFor="birthDate" className='block mb-2 font-bold'>Ngày sinh:</label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
                {errors.birthDate && <p className='text-red-500'>{errors.birthDate}</p>}
              </div>

              <div className='mb-4 w-full'>
                <label htmlFor="placeOfOrigin" className='block mb-2 font-bold'>Quê quán:</label>
                <input
                  type="text"
                  placeholder="Quê quán"
                  name="placeOfOrigin"
                  value={formData.placeOfOrigin}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
              </div>
              
              <div className='mb-4 w-full'>
                <label htmlFor="className" className='block mb-2 font-bold'>Lớp:</label>
                <input
                  type="text"
                  placeholder="Lớp"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
              </div>
              
              <div className='mb-4 w-full'>
                <label htmlFor="studentCode" className='block mb-2 font-bold'>Mã sinh viên:</label>
                <input
                  type="text"
                  placeholder="Mã sinh viên"
                  name="studentCode"
                  value={formData.studentCode}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
              </div>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className='mb-4 w-full'>
              <label htmlFor="major" className='block mb-2 font-bold'>Ngành học:</label>
              <input
                type="text"
                placeholder="Ngành học"
                name="major"
                value={formData.major}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
              </div>
              <div className='mb-4 w-full'>
              <label htmlFor="phoneNumber" className='block mb-2 font-bold'>Số điện thoại:</label>
              <input
                type="text"
                placeholder="Số điện thoại"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
              </div>
            <div className='mb-4 w-full'>
              <label htmlFor="email" className='block mb-2 font-bold'>Email:</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>

            <div className='mb-4 w-full'>
              <label htmlFor="facebook" className='block mb-2 font-bold'>Facebook:</label>
              <input
                type="text"
                placeholder="Facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>

            </div>
            
            <div className='mb-4'>
              <label htmlFor="describeYourself" className='block mb-2 font-bold'>Giới thiệu bản thân:</label>
              <textarea
                name="describeYourself"
                placeholder="Giới thiệu đôi nét về bản thân"
                value={formData.describeYourself}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="strengthness" className='block mb-2 font-bold'>Điểm mạnh:</label>
              <textarea
                name="strengthness"
                placeholder="Điểm mạnh"
                value={formData.strengthness}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="weakness" className='block mb-2 font-bold'>Điểm yếu:</label>
              <textarea
                name="weakness"
                placeholder="Điểm yếu"
                value={formData.weakness}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>
            </div>
            <div className='bg-slate-200 w-full rounded-md px-8 pt-6 pb-4 mb-4 shadow-lg'>
            <div className='mb-4'>
              <label htmlFor="knowUsThrough" className='block mb-2 font-bold'>Biết đến chúng tôi qua:</label>
              <textarea
                placeholder="Biết đến chúng tôi qua đâu?"
                name="knowUsThrough"
                value={formData.knowUsThrough}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="reason" className='block mb-2 font-bold'>Lý do bạn chọn đăng ký vào ITIS?</label>
              <textarea
                name="reason"
                placeholder="Lý do bạn chọn đăng ký vào ITIS?"
                value={formData.reason}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="aspiration" className='block mb-2 font-bold'>Nguyện vọng khi tham gia vào ITIS?</label>
              <textarea
                name="aspiration"
                placeholder="Nguyện vọng của bạn"
                value={formData.aspiration}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="question" className='block mb-2 font-bold'>Nếu có thể, bạn muốn đặt câu hỏi nào cho chúng tôi?</label>
              <textarea
                name="question"
                placeholder="Câu hỏi của bạn"
                value={formData.question}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded-md h-24'
              />
            </div>
          <p>{popupMessage}</p>
          
          
          <div className='flex justify-center'>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded'>
              Gửi đăng ký
            </button>
          </div></div>
        </form>
      </div>

      <div id='Contact' className='w-full h-full bg-transparent text-neutral-800 p-[15px] z-20 mb-4'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'>
          <img src="/logo.svg" width={200} height={200} alt="Main Logo" />
          <div className='w-auto h-auto md:mx-16'>
            <h3 className='font-bold text-[16px] lg:text-[24px] mb-4'>Liên hệ</h3>
            <span className='flex w-full mb-3 '>
              <img src="/facebook.svg" width={20} height={20} alt="Facebook" />
              <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className='ml-4'>
                Liên chi Đoàn Khoa CNTT1 - PTIT
              </a>
            </span>
            <span className='flex w-full items-center mb-3'>
                <FontAwesomeIcon icon={faPhone} width={20} height={20}/>
              <p className='ml-4'>033.585.0230</p>
            </span>
            <span className='flex w-full items-center'>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20}/>
                <p className='ml-4'>bch.cntt.ptit@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormRegister;
