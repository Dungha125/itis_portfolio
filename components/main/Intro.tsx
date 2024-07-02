import React from 'react'

const Intro = () => {
  return (
    <section
    className='flex flex-col items-center justify-center my-2 h-full relative overflow-hidden'
    >
        <img src="/section.svg" width={1920} alt="" className='mb-0'/>
        <div
        className='h-full w-full bg-[#040224] '>
            <div className='mx-6 flex flex-col gap-3 px-6 text-white text-justify'>
                <h1 className='font-bold text-4xl '>Giới thiệu</h1>
                <p>Liên Chi Đoàn khoa CNTT1 là Liên chi Đoàn lớn nhất Học viện với khoảng hơn 5000 đoàn viên.</p>
                <p>Được sự hỗ trợ trực tiếp từ các thầy cô trong khoa, khi trở thành thành viên của Liên chi, các bạn sẽ được tiếp xúc và làm việc trực tiếp cùng các thầy cô. Được tham gia các hoạt động vui chơi được tổ chức một cách chuyên nghiệp. Ngoài ra sẽ được học các kĩ năng như: kĩ năng tổ chức sự kiện, kĩ năng thuyết trình, kĩ năng làm việc nhóm,...Đặc biệt trực tiếp tham gia tổ chức các hoạt động quy mô Khoa và Học viện.</p>
            </div>
            
        </div>

    </section>
  )
}

export default Intro
