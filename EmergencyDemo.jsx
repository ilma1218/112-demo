import React, { useState } from 'react';

export default function EmergencyDemo() {
  const [audioFile, setAudioFile] = useState(null);
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [keywords, setKeywords] = useState({ location: "", victim: "" });
  const [summary, setSummary] = useState("");
  const [manual, setManual] = useState("");

  const handleSTT = async () => {
    setText("도와주세요. 서울 강남에서 강도를 당했어요. 친구가 다쳤어요.");
  };

  const handleClassification = () => {
    setType("강도 사건");
  };

  const handleKeywordExtraction = () => {
    setKeywords({ location: "서울 강남", victim: "친구" });
  };

  const handleSummarization = () => {
    setSummary("서울 강남에서 발생한 강도 사건. 피해자는 친구로 추정됨.");
  };

  const handleManual = () => {
    setManual("출동 요청 및 응급 구조 요청. 피해자 상태 확인 후 병원 이송 필요.");
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>112 신고 처리 시연</h1>

      <div style={{ marginTop: '2rem' }}>
        <input type="file" onChange={(e) => setAudioFile(e.target.files[0])} />
        <button onClick={handleSTT} style={btnStyle}>1. STT 처리</button>
        <div>텍스트: {text}</div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleClassification} style={btnStyle}>2. 신고 유형 분류</button>
        <div>유형: {type}</div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleKeywordExtraction} style={btnStyle}>3. 키워드 추출</button>
        <div>위치: {keywords.location}</div>
        <div>피해자: {keywords.victim}</div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleSummarization} style={btnStyle}>4. 요약</button>
        <div>요약: {summary}</div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleManual} style={btnStyle}>5. 대응 매뉴얼 제시</button>
        <div>대응 매뉴얼: {manual}</div>
      </div>
    </div>
  );
}

const btnStyle = {
  marginTop: '0.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem'
};

