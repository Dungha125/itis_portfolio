import React, { useState } from 'react';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    Hovaten: '',
    gioitinh: '',
    ngaysinh: '',
    quequan: '',
    Lop: '',
    MSV: '',
    email: '',
    facebook: '',
    Gioithieu: '',
    point: '',
    bietden: '',
    reason: '',
    wish: '',
    cauhoi: '',
  });

  const [errors, setErrors] = useState({
    ngaysinh: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    // Validate Date of Birth
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(formData.ngaysinh)) {
      errors.ngaysinh = 'Ngày sinh không hợp lệ (định dạng: YYYY-MM-DD).';
      valid = false;
    } else {
      const date = new Date(formData.ngaysinh);
      const today = new Date();
      if (isNaN(date.getTime()) || date > today) {
        errors.ngaysinh = 'Ngày sinh không tồn tại hoặc lớn hơn ngày hiện tại.';
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

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
      console.log('Form data is valid:', formData);
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='w-full h-auto bg-slate-100 flex flex-col z-[50] rounded-xl px-8 py-6 overflow-y-auto max-h-[70vh]'>
        <h1 className='text-neutral-900 w-full text-center font-bold text-2xl mb-4'>ĐĂNG KÝ</h1>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="Hovaten" className='block mb-2 font-bold'>Họ và tên:</label>
            <input
              type="text"
              placeholder="Họ và tên"
              name="Hovaten"
              value={formData.Hovaten}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="gioitinh" className='block mb-2 font-bold'>Giới tính:</label>
            <div className='flex gap-4 items-center'>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="gioitinh"
                  value="Nam"
                  checked={formData.gioitinh === 'Nam'}
                  onChange={handleChange}
                  className='mr-2'
                /> Nam
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="gioitinh"
                  value="Nữ"
                  checked={formData.gioitinh === 'Nữ'}
                  onChange={handleChange}
                  className='mr-2'
                /> Nữ
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor="ngaysinh" className='block mb-2 font-bold'>Ngày sinh:</label>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              name="ngaysinh"
              value={formData.ngaysinh}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            {errors.ngaysinh && <p className='text-red-500'>{errors.ngaysinh}</p>}
          </div>

          <div className='mb-4'>
            <label htmlFor="quequan" className='block mb-2 font-bold'>Quê quán:</label>
            <input
              type="text"
              placeholder="Quê quán"
              name="quequan"
              value={formData.quequan}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="Lop" className='block mb-2 font-bold'>Lớp:</label>
            <input
              type="text"
              placeholder="Lớp"
              name="Lop"
              value={formData.Lop}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="MSV" className='block mb-2 font-bold'>Mã sinh viên:</label>
            <input
              type="text"
              placeholder="Mã sinh viên"
              name="MSV"
              value={formData.MSV}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
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

          <div className='mb-4'>
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

          <div className='mb-4'>
            <label htmlFor="Gioithieu" className='block mb-2 font-bold'>Giới thiệu bản thân:</label>
            <textarea
              name="Gioithieu"
              placeholder="Giới thiệu đôi nét về bản thân"
              value={formData.Gioithieu}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="point" className='block mb-2 font-bold'>Điểm mạnh - Điểm yếu:</label>
            <textarea
              name="point"
              placeholder="Điểm mạnh - Điểm yếu"
              value={formData.point}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="bietden" className='block mb-2 font-bold'>Bạn biết tới Liên chi qua đâu?</label>
            <textarea
              name="bietden"
              placeholder=""
              value={formData.bietden}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="reason" className='block mb-2 font-bold'>Tại sao bạn quyết định tham gia ứng tuyển Liên chi?</label>
            <textarea
              name="reason"
              placeholder=""
              value={formData.reason}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="wish" className='block mb-2 font-bold'>Mong muốn khi trở thành CTV:</label>
            <textarea
              name="wish"
              placeholder=""
              value={formData.wish}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="cauhoi" className='block mb-2 font-bold'>Bạn có câu hỏi cho chúng mình không?</label>
            <textarea
              name="cauhoi"
              placeholder=""
              value={formData.cauhoi}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md h-24'/>
              </div>

              <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default FormRegister;
