'use client';

import { useState } from 'react';

export default function ConvertPage() {
  const [files, setFiles] = useState<File[]>([]); // Lưu nhiều file
  const [loading, setLoading] = useState<boolean>(false);
  const [downloadUrls, setDownloadUrls] = useState<{ url: string; name: string }[]>([]); // Lưu URL và tên gốc
  const [errors, setErrors] = useState<string[]>([]); // Lưu nhiều lỗi

  // Xử lý thay đổi file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles)); // Lưu nhiều file vào state
    }
  };

  // Chuyển đổi các file
  const handleSubmit = async () => {
    if (files.length === 0) return;

    setLoading(true);
    setErrors([]);
    setDownloadUrls([]);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      try {
        // Bước 1: Đọc file thành Base64
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64File = reader.result as string;

          // Bước 2: Chuẩn bị payload cho ConvertAPI
          const payload = {
            Parameters: [
              {
                Name: 'File',
                FileValue: {
                  Name: file.name,
                  Data: base64File.split(',')[1], // Xóa prefix base64 (data:image/jpeg;base64,)
                },
              },
              {
                Name: 'StoreFile',
                Value: true,
              },
            ],
          };

          try {
            // Bước 3: Gửi yêu cầu POST tới ConvertAPI
            const response = await fetch('https://v2.convertapi.com/convert/heic/to/jpg', {
              method: 'POST',
              headers: {
                'Authorization': 'Bearer secret_FaNRpUhEC2m3naYN', // Thay thế bằng API key của bạn
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.error || 'Conversion failed');
            }

            // Bước 4: Kiểm tra kết quả và lưu URL tải về cùng với tên gốc
            if (data.Files && data.Files[0].Url) {
              setDownloadUrls(prev => [
                ...prev,
                { url: data.Files[0].Url, name: file.name }, // Thêm URL và tên gốc vào mảng
              ]);
            } else {
              throw new Error('Failed to get converted file URL');
            }
          } catch (err) {
            setErrors(prev => [...prev, `Error with file ${file.name}: ${err}`]);
          }
        };

        reader.readAsDataURL(file); // Đọc file thành base64
      } catch (err) {
        setErrors(prev => [...prev, `Error with file ${file.name}: ${err}`]);
      }
    }
    setLoading(false);
  };

  return (
    <div className="mt-12 text-neutral-700 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="mb-4">
        <input 
          type="file" 
          onChange={handleFileChange} 
          multiple // Cho phép chọn nhiều file
          className="file:mr-4 file:py-2 file:px-4 file:bg-blue-500 file:text-white file:rounded-lg cursor-pointer"
        />
      </div>

      <button 
        onClick={handleSubmit} 
        disabled={loading} 
        className={`w-full p-3 bg-blue-600 text-white rounded-lg ${loading && 'opacity-50'}`}
      >
        {loading ? 'Converting...' : 'Convert Files'}
      </button>

      {errors.length > 0 && (
        <div className="mt-4 bg-red-500 text-white p-4 rounded-lg">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      {downloadUrls.length > 0 && (
        <div className="mt-4 space-y-4">
          {downloadUrls.map((file, index) => (
            <a 
              key={index} 
              href={file.url} 
              download={file.name} // Sử dụng tên gốc của file làm tên tải về
              className="block text-blue-400 hover:underline"
            >
              Download {file.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
