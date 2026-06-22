'use client';
import { useState, useRef } from 'react';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

export default function PalmReaderFlow() {
  const [file, setFile] = useState<File | null>(null);
  const [handDetected, setHandDetected] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setHandDetected(null);
      setReading(null);
    }
  };

  const validateHand = async () => {
    if (!imgRef.current) return;
    setIsLoading(true);

    const vision = await FilesetResolver.forVisionTasks('/models');
    console.log('Fileset resolver initialized:', vision);
    const detector = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: '/models/hand_landmarker.task',
      },
      runningMode: 'IMAGE',
      numHands: 2,
    });

    const result = detector.detect(imgRef.current);
    setHandDetected(result.handedness.length > 0);
    setIsLoading(false);
  };

  const sendToLLM = async () => {
    if (!file) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const { ipfsHash } = await uploadRes.json();

    const analysisRes = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ipfsHash }),
    });

    const { reading } = await analysisRes.json();
    setReading(reading);
    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <div>
          <img
            ref={imgRef}
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-full max-h-96 object-contain border rounded mt-2"
          />
          <button onClick={validateHand} className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded">
            손 인식 확인
          </button>
        </div>
      )}
      {handDetected === true && (
        <div className="text-green-600 mt-2">
          ✅ 손이 인식되었습니다.
          <button onClick={sendToLLM} className="bg-orange-600 text-white px-4 py-2 ml-4 rounded">
            LLM으로 보내기
          </button>
        </div>
      )}
      {handDetected === false && <div className="text-red-600 mt-2">❌ 손을 명확하게 인식하지 못했습니다</div>}
      {isLoading && <p className="text-gray-600">처리 중...</p>}
      {reading && (
        <div className="bg-orange-100 border border-orange-300 p-4 rounded mt-4">
          <h3 className="text-orange-800 font-bold mb-2">🔮 리딩:</h3>
          <p>{reading}</p>
        </div>
      )}
    </div>
  );
}
