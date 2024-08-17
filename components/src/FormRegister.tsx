import React from 'react'

const FormRegister = () => {
  return (
    <div className='w-full h-full absolute flex flex-col items-center mt-[10rem]'>
        <div className='w-[500px] h-auto bg-slate-100 flex flex-col z-[50] rounded-xl px-8'>
            <h1 className='text-neutral-900 w-full text-center font-bold text-2xl my-4'>Đăng ký</h1>
            <form style={formStyle}>
          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="Hovaten" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Họ và tên:
            </label>
            <input 
              type="text" 
              placeholder="Họ và tên" 
              name="Hovaten" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="gioitinh" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Giới tính:
            </label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="radio" name="gioitinh" value="Nam" /> Nam
              <input 
                type="radio" 
                name="gioitinh" 
                value="Nữ" 
                style={{ marginLeft: '10px' }}
              /> Nữ
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="ngaysinh" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Ngày sinh:
            </label>
            <input 
              type="text" 
              placeholder="Ngày sinh" 
              name="ngaysinh" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="quequan" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Quê quán:
            </label>
            <input 
              type="text" 
              placeholder="Quê quán" 
              name="quequan" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="Lop" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Lớp:
            </label>
            <input 
              type="text" 
              placeholder="Lớp" 
              name="Lop" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="MSV" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Mã sinh viên:
            </label>
            <input 
              type="text" 
              placeholder="Mã sinh viên" 
              name="MSV" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="email" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Email:
            </label>
            <input 
              type="text" 
              placeholder="Email" 
              name="email" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="facebook" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Facebook:
            </label>
            <input 
              type="text" 
              placeholder="Facebook" 
              name="facebook" 
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="Gioithieu" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Giới thiệu bản thân:
            </label>
            <textarea 
              name="Gioithieu" 
              placeholder="Giới thiệu đôi nét về bản thân" 
              style={textareaStyle}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="point" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Điểm mạnh - Điểm yếu:
            </label>
            <textarea 
              name="point" 
              placeholder="Điểm mạnh - Điểm yếu" 
              style={textareaStyle}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="bietden" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Bạn biết tới Liên chi qua đâu?
            </label>
            <textarea 
              name="bietden" 
              placeholder="" 
              style={textareaStyle}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="reason" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Tại sao bạn quyết định tham gia ứng tuyển Liên chi?
            </label>
            <textarea 
              name="reason" 
              placeholder="" 
              style={textareaStyle}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="wish" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Mong muốn khi trở thành CTV:
            </label>
            <textarea 
              name="wish" 
              placeholder="" 
              style={textareaStyle}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label 
              htmlFor="cauhoi" 
              style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
            >
              Bạn có câu hỏi cho chúng mình không?
            </label>
            <textarea 
              name="cauhoi" 
              placeholder="" 
              style={textareaStyle}
            ></textarea>
          </div>
        </form>
        </div>
    </div>
  )
}

export default FormRegister


const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const formContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '90%',
  maxWidth: '500px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
};

const formStyle: React.CSSProperties = {
  width: '100%',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  height: '100px',
};