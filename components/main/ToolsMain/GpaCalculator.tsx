import React, { useState } from 'react';

const gradeStructures = [
  "10-10-20-60",
  "10-20-20-50",
  "10-10-30-50",
  "10-10-10-70",
  "5-10-10-25-50",
  "10-30-60",
  "10-20-70",
  "10-10-80",
];

// Hàm tính điểm dạng chữ
const getGradeLetter = (grade: number) => {
  if (grade >= 8.95) return 'A+';
  if (grade >= 8.45) return 'A';
  if (grade >= 7.95) return 'B+';
  if (grade >= 6.95) return 'B';
  if (grade >= 6.45) return 'C+';
  if (grade >= 5.45) return 'C';
  if (grade >= 4.95) return 'D+';
  if (grade >= 3.95) return 'D';
  return 'F';
};

const App: React.FC = () => {
  const [selectedStructure, setSelectedStructure] = useState<string>(gradeStructures[0]);
  const [scores, setScores] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [gradeLetter, setGradeLetter] = useState<string | null>(null);

  // Xử lý thay đổi điểm số
  const handleScoreChange = (index: number, value: string) => {
    const newScores = [...scores];
    newScores[index] = Number(value) || 0;
    setScores(newScores);
  };

  // Tính tổng điểm
  const calculateTotalScore = () => {
    const weightArray = selectedStructure.split('-').map(Number);
    const total = weightArray.reduce((sum, weight, index) => {
      return sum + (scores[index] || 0) * (weight / 100);
    }, 0);
    setTotalScore(total);
    setGradeLetter(getGradeLetter(total));
  };

  return (
    <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      <h2 className="text-xl font-bold text-white bg-blue-600 p-4 rounded-t-lg text-center">
        Tính điểm tổng kết
      </h2>

      {/* Chọn cấu trúc điểm */}
      <div className="mt-4">
        <label className="block font-semibold">Chọn cấu trúc điểm của môn học</label>
        <select
          value={selectedStructure}
          onChange={(e) => {
            setSelectedStructure(e.target.value);
            setScores([]);
            setTotalScore(null);
            setGradeLetter(null);
          }}
          className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {gradeStructures.map((structure) => (
            <option key={structure} value={structure}>
              {structure}
            </option>
          ))}
        </select>
      </div>

      {/* Nhập điểm */}
      <div className="mt-6">
        <table className="w-full border-collapse border border-blue-500 text-center">
          <thead>
            <tr className="bg-gray-200">
              {selectedStructure.split('-').map((weight, index) => (
                <th key={index} className="border border-blue-500 p-2">
                  Điểm {weight}%
                </th>
              ))}
              <th className="border border-blue-500 p-2">Tổng kết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {selectedStructure.split('-').map((_, index) => (
                <td key={index} className="border border-blue-500 p-2">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    onChange={(e) => handleScoreChange(index, e.target.value)}
                    className="w-full p-1 text-center rounded"
                  />
                </td>
              ))}
              <td className="border border-blue-500 p-2 text-red-500 font-bold">
                {totalScore !== null && (
                  <span>
                    {totalScore.toFixed(2)} ({gradeLetter})
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button */}
      <button
        onClick={calculateTotalScore}
        className="mt-6 w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition"
      >
        Tính tổng điểm
      </button>
    </div>
  );
};

export default App;
