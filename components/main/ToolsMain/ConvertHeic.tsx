'use client';

import { useState } from 'react';

const ConvertPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [downloadUrls, setDownloadUrls] = useState<{ url: string; name: string }[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [targetFormat, setTargetFormat] = useState<'jpg' | 'png'>('png');

  // Xử lý thay đổi file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const validFiles = Array.from(selectedFiles).filter((file) =>
        file.name.toLowerCase().endsWith('.heic')
      );

      if (validFiles.length === 0) {
        setErrors(['Vui lòng chọn các file có định dạng .HEIC']);
      } else {
        setErrors([]);
        setFiles(validFiles);
      }
    }
  };

  // Xử lý chuyển đổi file
  const handleSubmit = async () => {
    if (files.length === 0) {
      setErrors(['Vui lòng chọn ít nhất một file để chuyển đổi.']);
      return;
    }

    setLoading(true);
    setErrors([]);
    setDownloadUrls([]);

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file)); // Thêm từng file
    formData.append('target_format', targetFormat);

    try {
      const response = await fetch(
        'https://dev.lcdkhoacntt1-ptit.tech/api/convert-file/convert-heic',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Chuyển đổi thất bại');
      }

      // Đọc phản hồi là file zip hoặc blob
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Tạo file ZIP với tên cố định
      setDownloadUrls([
        { url, name: `converted_files.zip` }, // Tên file tải xuống cố định là converted_files.zip
      ]);
    } catch (err: any) {
      setErrors((prev) => [...prev, err.message || 'Lỗi không xác định']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[4rem] text-neutral-700 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <span className="w-full font-bold text-neutral-600 text-center">
        <h1 className="text-2xl my-[2rem]">Chuyển đổi HEIC sang JPG hoặc PNG</h1>
      </span>

      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept=".heic"
          className="file:mr-4 file:py-2 file:px-4 file:bg-blue-500 file:text-white file:rounded-lg cursor-pointer"
        />
        {files.length > 0 && (
          <p className="text-sm text-gray-600 mt-2">
            Số file đã chọn: {files.length}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="format" className="block font-bold mb-2">
          Chọn định dạng đích:
        </label>
        <select
          id="format"
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value as 'jpg' | 'png')}
          className="p-2 border rounded-lg w-full"
        >
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full p-3 bg-blue-600 text-white rounded-lg ${
          loading && 'opacity-50'
        }`}
      >
        {loading ? 'Converting...' : 'Convert Files'}
      </button>

      {errors.length > 0 && (
        <div className="mt-4 bg-red-500 text-white p-4 rounded-lg">
          <h4 className="font-bold">Đã xảy ra lỗi:</h4>
          <ul className="list-disc ml-5">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {downloadUrls.length > 0 && (
        <div className="mt-4 space-y-4">
          {downloadUrls.map((file, index) => (
            <a
              key={index}
              href={file.url}
              download={file.name}
              className="block text-blue-400 hover:underline"
            >
              Download {file.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConvertPage;
